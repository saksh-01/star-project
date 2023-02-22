using ReactNew.Models;
using ReactNew.Services;
using Microsoft.AspNetCore.Mvc;

namespace ReactNew.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TimeSheetController : ControllerBase
    {
        ITimeSheetServices _timeSheetServices;

        public TimeSheetController(ITimeSheetServices timeSheetServices)
        {
            _timeSheetServices = timeSheetServices;
        }

        [HttpGet]
        [Route("[action]")]
        public IActionResult GetAllTimeSheet()
        {
            try
            {
                var ts = _timeSheetServices.GetAllTimeSheet();
                if (ts == null)
                {
                    return NotFound();
                }
                return Ok(ts);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        [HttpGet]
        [Route("[action]/emailId")]
        public IActionResult GetTimeSheetByEmailId(string emailId)
        {
            try
            {
                var ts = _timeSheetServices.GetTimeSheetByEmailId(emailId);
                if (ts == null)
                {
                    return NotFound();
                }
                return Ok(ts);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        [HttpGet]
        [Route("[action]")]
        public IActionResult GetTimeSheetByEmailId()
        {
            try
            {
                var ts = _timeSheetServices.GetTimeSheetByEmailId();
                if (ts == null)
                {
                    return NotFound();
                }
                return Ok(ts);
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }

        [HttpPost]
        [Route("[action]")]
        public IActionResult SaveTimeSheet(TimeSheet timeSheet)
        {
            try
            {
                var model = _timeSheetServices.SaveTimeSheet(timeSheet);
                return Ok(model);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
    }
}
