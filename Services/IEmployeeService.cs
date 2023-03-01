using ReactNew.Models;
using ReactNew.ViewModel;

namespace ReactNew.Services
{
    public interface IEmployeeService
    {
        Employee GetEmployeeByEmail();

        Employee GetEmployeeByEmpId(int employeeId);

        ResponseModel SaveEmployee(Employee employee);

        ResponseModel DeleteEmployee(int employeeId);
    }
}
