using ReactNew.Models;
using ReactNew.ViewModel;

namespace ReactNew.Services
{
    public class TimeSheetService : ITimeSheetServices
    {
        public TimeSheetContext _Context;
        public IHttpContextAccessor _httpContextAccessor;

        public TimeSheetService(TimeSheetContext context, IHttpContextAccessor _httpContext)
        {
            _Context = context;
            _httpContextAccessor = _httpContext;
        }

        public ResponseModel DeleteTimeSheet(int TimeSheetId)
        {
            throw new NotImplementedException();
        }

        public List<TimeSheet> GetAllTimeSheet()
        {
            List<TimeSheet> ts;
            try
            {
                ts = _Context.Set<TimeSheet>().ToList();
            }
            catch (Exception)
            {
                throw;
            }
            return ts;
        }

        public List<TimeSheet> GetTimeSheetByEmailId(string emailId)
        {
            List<TimeSheet> ts;
            try
            {
                ts = _Context.Set<TimeSheet>().Where(t => t.EmployeeEmail == emailId).ToList();
            }
            catch (Exception)
            {
                throw;
            }
            return ts;
        }

        public List<TimeSheet> GetTimeSheetByEmailId()
        {
            List<TimeSheet> ts;
            GetEmailFromRequest getEmail = new GetEmailFromRequest();
            var email = getEmail.GetEmail(_httpContextAccessor.HttpContext);
            try
            {
                ts = _Context.Set<TimeSheet>().Where(t => t.EmployeeEmail == email).ToList();
            }
            catch (Exception ex)
            {
                throw;
            }
            return ts;
        }

        public List<TimeSheet> GetAllTimeSheetsUnderManager()
        {
            List<TimeSheet> ts;
            GetEmailFromRequest getEmail = new GetEmailFromRequest();
            var myemail = getEmail.GetEmail(_httpContextAccessor.HttpContext);
            Console.WriteLine(myemail);
            try
            {
                ts = _Context
                    .Set<TimeSheet>()
                    .Where(t => t.ManagerEmail == myemail && t.Status == 1)
                    .ToList();
            }
            catch (Exception)
            {
                throw;
            }
            return ts;
        }

        public ResponseModel SaveTimeSheet(ExcelReceivedInfo excelInfo)
        {
            ResponseModel response = new ResponseModel();
            GetEmailFromRequest getEmail = new GetEmailFromRequest();
            var emailid = getEmail.GetEmail(_httpContextAccessor.HttpContext);
            try
            {
                if (excelInfo.EmployeeEmail == emailid)
                {
                    var data = _Context
                        .Set<TimeSheet>()
                        .Where(_t => _t.EmployeeEmail == excelInfo.EmployeeEmail)
                        .Where(_t => _t.TimesheetID == excelInfo.TimesheetID)
                        .Count();
                    if (data > 0)
                    {
                        response.Message = "Do not Enter Repeted Enteries";
                    }
                    else
                    {
                        // if (
                        //     (
                        //         (excelInfo.EndPeriod - excelInfo.StartPeriod).Equals(
                        //             TimeSpan.Parse("4.00:00:00")
                        //         )
                        //     )
                        //     & (excelInfo.StartPeriod.DayOfWeek.ToString() == "Monday")
                        //     & (excelInfo.EndPeriod.DayOfWeek.ToString() == "Friday")
                        // )
                        // {
                        TimeSheet ts = new TimeSheet();
                        ts.TimesheetID = excelInfo.TimesheetID;
                        ts.EmployeeID = excelInfo.EmployeeID;
                        ts.EmployeeName = excelInfo.EmployeeName;
                        ts.EmployeeEmail = excelInfo.EmployeeEmail;
                        ts.PeriodStart = DateTime.FromOADate(excelInfo.PeriodStart);
                        ts.PeriodEnd = DateTime.FromOADate(excelInfo.PeriodEnd);
                        ts.Status = 1;
                        ts.Hours = excelInfo.Hours;
                        ts.ProjectName = excelInfo.ProjectName;
                        ts.ProjectID = excelInfo.ProjectID;
                        ts.ManagerID = excelInfo.ManagerID;
                        ts.ManagerName = excelInfo.ManagerName;
                        ts.ManagerEmail = excelInfo.ManagerEmail;
                        _Context.Add<TimeSheet>(ts);
                        response.Message = "TimeSheet Inserted Successfully";
                        _Context.SaveChanges();
                        response.IsSuccess = true;
                        // }
                        // else
                        // {
                        //     response.Message =
                        //         "1. Make Entry of working Days of 1 week  2. Starting Day : Monday and Ending Day : Friday";
                        // }
                    }
                }
                else
                {
                    response.Message = "You can not save entry except for yourself";
                }
            }
            catch (Exception ex)
            {
                response.IsSuccess = false;
                response.Message = "Error : " + ex.Message;
            }
            return response;
        }

        public ResponseModel UpdateTimeSheetsByManager(StatusUpdate statusUpdate)
        {
            Console.WriteLine(statusUpdate.TimeSheetId);
            Console.WriteLine(statusUpdate.StatusCode);
            ResponseModel model = new ResponseModel();
            GetEmailFromRequest getEmail = new GetEmailFromRequest();
            var emailid = getEmail.GetEmail(_httpContextAccessor.HttpContext);
            try
            {
                var ts = _Context.Find<TimeSheet>(statusUpdate.TimeSheetId);
                if (ts != null && ts.ManagerEmail == emailid)
                {
                    Console.WriteLine(statusUpdate.StatusCode);
                    ts.Status = statusUpdate.StatusCode;
                    model.Message = "Status of Timesheet updated";
                    _Context.SaveChanges();
                    model.IsSuccess = true;
                }
                else
                {
                    model.Message = "Unauthorised";
                }
            }
            catch (Exception ex)
            {
                model.IsSuccess = false;
                model.Message = "Error : " + ex.Message;
            }
            return model;
        }
    }
}
