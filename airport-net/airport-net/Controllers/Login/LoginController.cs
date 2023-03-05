using airport_net.Controllers.Login.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace airport_net.Controllers.Login
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        public ApplicationContext db = new ApplicationContext();

        [HttpPost]
        public IResult Login(LoginAuth args)
        {
            var user = db.Users.Select(p => new
            {
                p.Id,
                p.Login,
                p.Password,
                p.Role
            }).FirstOrDefault(p => p.Login == args.Login && p.Password == args.Password);

            if (user == null)
            {
                return Results.BadRequest(Results.Unauthorized());
            }

            List<Claim> claims = new() {
                new Claim(ClaimsIdentity.DefaultNameClaimType, user.Login),
                new Claim(ClaimsIdentity.DefaultRoleClaimType, user.Role)
            };
            ClaimsIdentity claim = new(claims, "AuthToken", ClaimsIdentity.DefaultNameClaimType, ClaimsIdentity.DefaultRoleClaimType);

            DateTime now = DateTime.UtcNow;

            var jwt = new JwtSecurityToken(
                    issuer: AuthOptions.ISSUER,
                    audience: AuthOptions.AUDIENCE,
                    notBefore: now,
                    claims: claim.Claims,
                    expires: DateTime.UtcNow.Add(TimeSpan.FromMinutes(2)),
                    signingCredentials: new SigningCredentials(AuthOptions.GetSymmetricSecurityKey(), SecurityAlgorithms.HmacSha256));
            var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);

            return Results.Json(new
            {
                Id = user.Id,
                Token = encodedJwt,
                Username = user.Login,
                Role = user.Role
            });
        }
    }
}
