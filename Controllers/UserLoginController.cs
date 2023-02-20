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

    // [ApiController, Authorize]
    // [Route("api/getName")]
    // public class GetName
    // {
    //     public IHttpContextAccessor _httpContextAccessor;

    //     public GetName(IHttpContextAccessor _httpContext)
    //     {
    //         _httpContextAccessor = _httpContext;
    //     }

    //     [HttpGet]
    //     public string GetEmail()
    //     {
    //         // Dictionary<string, string> dict = new Dictionary<string, string>();
    //         GetEmailFromRequest getEmail = new GetEmailFromRequest();
    //         var email = getEmail.GetEmail(_httpContextAccessor.HttpContext);
    //         //var email = "shivammandloi1102@gamil.com";
    //         // Console.WriteLine(email, "Email name");
    //         // dict.Add("shivam", "mandloi");
    //         // dict.Add("King", "Kohli");
    //         // return dict;
    //         return null;
    //     }
    // }
}
