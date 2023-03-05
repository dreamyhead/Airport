using System.ComponentModel.DataAnnotations;

namespace airport_net.Controllers.Login.Data
{
    public class LoginAuth
    {
        [Required]
        public int Id { get; set; }

        [Required]
        public string Login { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }
    }
}
