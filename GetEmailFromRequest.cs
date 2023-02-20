using System.IdentityModel.Tokens.Jwt;

namespace ReactNew
{
    public class GetEmailFromRequest
    {
        public string GetEmail(HttpContext context)
        {
            var token = GetJetTokenFRomHeader(context);
            if (token == null)
            {
                return "";
            }
            var tokenHandler = new JwtSecurityTokenHandler();
            var ParsedToken = tokenHandler.ReadJwtToken(token);
            var claims = ParsedToken.Claims;
            foreach (var claim in claims)
            {
                Console.WriteLine(claim.Type, claim.Value, "claim type and claim value");
                return claim.Value;
            }
            return "";
        }

        public string GetJetTokenFRomHeader(HttpContext context)
        {
            if (context.Request.Headers.TryGetValue("Authorization", out var headerValues))
            {
                var token = headerValues.FirstOrDefault(
                    h => h != null ? h.StartsWith("Bearer ") : true
                );
                if (!string.IsNullOrEmpty(token))
                {
                    return token.Substring("Bearer ".Length);
                }
            }
            return "";
        }
    }
}
