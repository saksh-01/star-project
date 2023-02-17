using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using ReactNew.model;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace ReactNew
{
    public class JWTToken
    {
        private IConfiguration _configuration;

        public JWTToken(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public string CreateToken(UserPass user)
        {
            List<Claim> claims = new List<Claim>()
            {
                new Claim(ClaimTypes.Name, user.email ?? "default value"),
            };
            var key = new SymmetricSecurityKey(
                System.Text.Encoding.UTF8.GetBytes(
                    _configuration.GetSection("AppSettings:Token").Value
                        ?? "this is my custom Secret key for authentication"
                )
            );
            var cred = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var token = new JwtSecurityToken(
                claims: claims,
                expires: DateTime.Now.AddDays(1),
                signingCredentials: cred
            );
            var jwt = new JwtSecurityTokenHandler().WriteToken(token);
            return jwt;
        }
    }
}
