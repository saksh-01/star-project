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

        [HttpGet]
        [Route("[action]")]
        public IActionResult GetEmployeeByEmail()
        {
            try
            {
                var employee = _employeeService.GetEmployeeByEmail();
                if (employee == null)
                {
                    return NotFound();
                }
                return Ok(employee);
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }

        [HttpGet]
        [Route("[action]/id")]
        public IActionResult GetEmployeeByEmpId(int employeeID)
        {
            try
            {
                var employee = _employeeService.GetEmployeeByEmpId(employeeID);
                if (employee == null)
                {
                    return NotFound();
                }
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
