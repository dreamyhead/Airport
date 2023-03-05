using airport_net.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace airport_net.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        public ApplicationContext db = new ApplicationContext();

        [HttpGet]
        [Route("get")]
        public List<User> Get()
        {
            var tickets = db.Users.ToList();
            return tickets;
        }

        [HttpGet]
        [Route("GetTicket")]
        public User Get(int id)
        {
            return new User();
        }

        [HttpPost]
        [Route("create")]
        public void Post(User user)
        {

            //for (int i = 0; i < ticket.; i++)
            //{
            var checkTicket = db.Users
            .Where(u => u.Id == user.Id)
            .FirstOrDefault();

            if (checkTicket == null)
            {
               
                db.Users.Add(new User
                {
                    Login = user.Login,
                    Password = user.Password,
                    Role = user.Role,
                    Name = user.Name,
                    LastName = user.LastName,
                });

                db.SaveChanges();
            }
            //}
        }

        [HttpPut]
        [Route("update")]
        public void Update(User employee)
        {

        }

        [HttpDelete]
        [Route("delete")]
        public void Delete(int id)
        {
            var user = db.Users.Find(id);

            if (user != null)
            {
                db.Users.Remove(user);
                db.SaveChanges();
            }
        }
    }
}
