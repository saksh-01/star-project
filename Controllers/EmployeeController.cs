using ReactNew.Models;
using ReactNew.Services;
using Microsoft.AspNetCore.Mvc;

namespace ReactNew.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        IEmployeeService _employeeService;

        public EmployeeController(IEmployeeService employeeService)
        {
            _employeeService = employeeService;
        }

        // [HttpGet]
        // [Route("[action]")]
        // public IActionResult GetAllEmployees()
        // {
        //     try
        //     {
        //         var employee = _employeeService.GetEmployeeList();
        //         if (employee == null)
        //         {
        //             return NotFound();
        //         }
        //         return Ok(employee);
        //     }
        //     catch (Exception)
        //     {
        //         return BadRequest();
        //     }
        // }

        // [HttpGet]
        // [Route("[action]/email")]
        // public IActionResult GetEmployeeByEmail(string email)
        // {
        //     Console.WriteLine("get Employee By Email");
        //     try
        //     {
        //         var employee = _employeeService.GetEmployeeByEmail(email);
        //         Console.WriteLine(employee);
        //         if (employee == null)
        //         {
        //             return NotFound();
        //         }
        //         Console.WriteLine("hiiiiiiiiiiiiiiiiiiiiiiiiii");
        //         return Ok(employee);
        //     }
        //     catch (Exception)
        //     {
        //         return BadRequest();
        //     }
        // }


        [HttpGet]
        [Route("[action]")]
        public IActionResult GetEmployeeByEmail()
        {
            Console.WriteLine("get employee by email");
            try
            {
                Employee employee = _employeeService.GetEmployeeByEmail();
                Console.WriteLine(employee);
                if (employee == null)
                {
                    return NotFound();
                }
                Console.WriteLine("hiiiiiiiiiiiiiiiiiiiiiiiiii");
                return Ok(employee);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        [HttpGet]
        [Route("[action]/id")]
        public IActionResult GetEmployeeByEmpId(int employeeID)
        {
            Console.WriteLine("get employee by EmployeeID");
            try
            {
                var employee = _employeeService.GetEmployeeByEmpId(employeeID);
                if (employee == null)
                {
                    return NotFound();
                }
                Console.WriteLine("hiiiiiiiiiiiiiiiiiiiiiiiiii");
                return Ok(employee);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        [HttpPost]
        [Route("[action]")]
        public IActionResult SaveEmployee(Employee employee)
        {
            try
            {
                var model = _employeeService.SaveEmployee(employee);
                return Ok(model);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        [HttpDelete]
        [Route("[action]")]
        public IActionResult DeleteEmployee(int employeeId)
        {
            try
            {
                var model = _employeeService.DeleteEmployee(employeeId);
                return Ok(model);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
    }
}
