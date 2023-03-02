using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReactNew.Models;
using ReactNew.Services;

namespace ReactNew.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmailController : ControllerBase
    {
        IEmailServices _emailServices;

        public EmailController(IEmailServices emailServices)
        {
            _emailServices = emailServices;
        }

        [HttpPost]
        [Route("[action]")]
        public async Task<IActionResult> sendEmail(Email email)
        {
            try
            {
                var model = await _emailServices.SendEmail(email);
                return Ok(model);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
