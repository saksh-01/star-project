using Microsoft.AspNetCore.Mvc;
using ReactNew;
using ReactNew.Database;
using ReactNew.model;

namespace reactnew.Controllers
{
    [ApiController]
    [Route("api/login")]
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
        public LoginResponse CheckUser(UserPass userInfo)
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
            JWTToken jwtToken = new JWTToken(_configure);
            var Token = jwtToken.CreateToken(userInfo);
            return new LoginResponse()
            {
                success = true,
                Token = Token,
                Message = "successfully"
            };
        }
    }
}
