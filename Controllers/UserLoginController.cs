using ReactNew.Database;
using ReactNew.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ReactNew.Controllers
{
    [Route("api/[controller]")]
    [ApiController, AllowAnonymous]
    public class UserLoginController : ControllerBase
    {
        private readonly ILogger<UserLoginController> _logger;
        IConfiguration _configure;

        public UserLoginController(ILogger<UserLoginController> logger, IConfiguration configure)
        {
            _configure = configure;
            _logger = logger;
        }

        [HttpPost]
        public LoginResponse CheckUSer(UserPass userInfo)
        {
            Console.WriteLine(userInfo.email);
            Console.WriteLine(userInfo.Password);
            GetDatabase gtbase = new GetDatabase();
            UserInfoDatabase? userData;
            userData = gtbase.GetUser(userInfo);
            if (userData == null)
            {
                return new LoginResponse()
                {
                    success = false,
                    Token = string.Empty,
                    Message = "User not exist"
                };
            }
            else if (userInfo.Password != userData.Password)
            {
                return new LoginResponse()
                {
                    success = false,
                    Token = string.Empty,
                    Message = "Password is wrong"
                };
            }
            CreateToken jwtToken = new CreateToken(_configure);
            var Token = jwtToken.GetToken(userInfo);
            return new LoginResponse()
            {
                success = true,
                Token = Token,
                Message = "successfully"
            };
        }
    }
}
