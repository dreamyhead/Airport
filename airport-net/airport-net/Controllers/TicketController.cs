using airport_net.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace airport_net.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    
    public class TicketController : ControllerBase
    {
        public ApplicationContext db = new ApplicationContext();

        [HttpGet]
        [Route("getall")]
        public List<Ticket> Get()
        {
            var tickets = db.Tickets.Include(u => u.Flight).Include(o => o.User).ToList();
            return tickets;
        }

        [HttpGet]
        [Route("get")]
        public List<Ticket> Get(string startPoint, string endPoint)
        {
            var tickets = db.Tickets.Include(u => u.Flight).Where(u => u.Flight.StartPoint == startPoint && u.Flight.EndPoint == endPoint).ToList();
            return tickets;
        }

        [HttpGet]
        [Route("GetTicket")]
        public Ticket Get(int id)
        {
            return new Ticket();
        }

        [HttpPost]
        [Route("create")]
        public void Post(Ticket ticket)
        {

            var checkTicket = db.Tickets
            .Where(u => u.Id == ticket.Id)
            .FirstOrDefault();

            if (checkTicket == null)
            {
                db.Tickets.Add(new Ticket
                {
                    Id = ticket.Id,
                    NumberOfFlight = ticket.Id,
                    NumberOfPlace = ticket.NumberOfPlace,
                    isBusy = ticket.isBusy,
                    Price = ticket.Price,
                    Flight = ticket.Flight,
                    FlightId = ticket.FlightId
                });

                db.SaveChanges();
            }
        }

        [HttpGet]
        [Route("update")]
        public void Update(int id)
        {
            var ticket = db.Tickets.Find(id);
            ticket.isBusy = true;
            db.Tickets.Update(ticket);
            db.SaveChanges();
        }

        [HttpGet]
        [Route("updateuser")]
        public void UpdateUser(int id, int userId)
        {
            var ticket = db.Tickets.Find(id);

            ticket.UserId = userId;
            ticket.isBusy = true;
            db.Tickets.Update(ticket);
            db.SaveChanges();
        }

        [HttpGet]
        [Route("updateticket")]
        public void Updateticket(int id)
        {
            var ticket = db.Tickets.Find(id);

            ticket.UserId = null;
            ticket.isBusy = false;
            db.Tickets.Update(ticket);
            db.SaveChanges();
        }

        [HttpDelete]
        [Route("delete")]
        public void Delete(int id)
        {
            var user = db.Tickets.Find(id);

            if (user != null)
            {
                db.Tickets.Remove(user);
                db.SaveChanges();
            }
        }
    }
}
