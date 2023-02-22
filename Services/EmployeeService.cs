using System.Globalization;
using ReactNew.Models;
using ReactNew.ViewModel;

namespace ReactNew.Services
{
    public class EmployeeService : IEmployeeService
    {
        private EmpContext _context;
        public IHttpContextAccessor _httpContextAccessor;

        public EmployeeService(EmpContext context, IHttpContextAccessor _httpContext)
        {
            _context = context;
            _httpContextAccessor = _httpContext;
        }

        public Employee GetEmployeeByEmpId(int employeeId)
        {
            Employee emp;
            try
            {
                emp = _context.Find<Employee>(employeeId);
            }
            catch (Exception)
            {
                throw;
            }
            return emp;
        }

        public ResponseModel DeleteEmployee(int employeeId)
        {
            ResponseModel model = new ResponseModel();
            try
            {
                Employee _temp = GetEmployeeByEmpId(employeeId);
                if (_temp != null)
                {
                    _context.Remove<Employee>(_temp);
                    _context.SaveChanges();
                    model.IsSuccess = true;
                    model.Message = "Employee Deleted Successfully";
                }
                else
                {
                    model.IsSuccess = false;
                    model.Message = "Employee Not Found";
                }
            }
            catch (Exception ex)
            {
                model.IsSuccess = false;
                model.Message = "Error : " + ex.Message;
            }
            return model;
        }

        public Employee GetEmployeeByEmail()
        {
            Employee emp;
            GetEmailFromRequest getEmail = new GetEmailFromRequest();
            var email = getEmail.GetEmail(_httpContextAccessor.HttpContext);
            try
            {
                emp = _context.Find<Employee>(email);
                // Console.WriteLine(emp);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                throw;
            }
            return emp;
        }

        public ResponseModel SaveEmployee(Employee employee)
        {
            ResponseModel model = new ResponseModel();
            try
            {
                Employee _temp = GetEmployeeByEmpId(employee.EmployeeID);
                if (_temp != null)
                {
                    _temp.EmployeeName = employee.EmployeeName;
                    _temp.EmployeeID = employee.EmployeeID;
                    _temp.Department = employee.Department;
                    _temp.Gender = employee.Gender;
                    _temp.EmailID = employee.EmailID;
                    _temp.PhoneNumber = employee.PhoneNumber;
                    _temp.ImageURL = employee.ImageURL;

                    _temp.DOJ = employee.DOJ;
                    _temp.DOB = employee.DOB;
                    _context.Update<Employee>(_temp);
                    model.Message = "Employee Update Successfully";
                }
                else
                {
                    _context.Add<Employee>(employee);
                    model.Message = "Employee Inserted Successfully";
                }
                _context.SaveChanges();
                model.IsSuccess = true;
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
