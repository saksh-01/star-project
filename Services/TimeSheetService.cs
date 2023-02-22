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

        public ResponseModel SaveTimeSheet(TimeSheet timeSheet)
        {
            ResponseModel response = new ResponseModel();
            try
            {
                _Context.Add<TimeSheet>(timeSheet);
                response.Message = "TimeSheet Inserted Successfully";
                _Context.SaveChanges();
                response.IsSuccess = true;
            }
            catch (Exception ex)
            {
                response.IsSuccess = false;
                response.Message = "Error : " + ex.Message;
            }
            return response;
        }
    }
}
