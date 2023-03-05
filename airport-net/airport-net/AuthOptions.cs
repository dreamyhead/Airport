using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace airport_net
{
    public class AuthOptions
    {
        const string KEY = "9n1H9g31tzU7WYLd4VwDKEXS0w7lAxyy";
        public const string ISSUER = "projectApi";
        public const string AUDIENCE = "projectClient";
        public const int LIFETIME = 20;
        public static SymmetricSecurityKey GetSymmetricSecurityKey()
        {
            return new SymmetricSecurityKey(Encoding.ASCII.GetBytes(KEY));
        }
    }
}
