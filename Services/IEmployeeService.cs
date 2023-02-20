using ReactNew.Models;
using ReactNew.ViewModel;

namespace ReactNew.Services
{
    public interface IEmployeeService
    {
        // List<Employee> GetEmployeeList();

        Employee GetEmployeeByEmail();

        // Employee GetEmployeeByEmail(string email);

        //Employee GetEmployeeById(int id);
        Employee GetEmployeeByEmpId(int employeeId);

        ResponseModel SaveEmployee(Employee employee);

        ResponseModel DeleteEmployee(int employeeId);
    }
}
