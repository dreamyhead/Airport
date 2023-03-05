using airport_net.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Net;
using System.Net.Sockets;

namespace airport_net.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FlightController : ControllerBase
    {
        public ApplicationContext db = new ApplicationContext();

        [HttpGet]
        [Route("get")]
        public List<Flight> Get()
        {
            var flights = db.Flights
                .Include(u => u.Airplane)
                //.Select(u => new Flight
                //{
                //    Id = u.Id,
                //    StartPoint = u.StartPoint,
                //    EndPoint = u.EndPoint,
                //    StartDate = u.StartDate,
                //    EndDate = u.EndDate,
                //    AirplaneId = u.AirplaneId,
                //    Airplane = u.Airplane,
                //})
                .ToList();
            return flights;
        }

        [HttpGet]
        [Route("GetFlight")]
        public Flight Get(int id)
        {
            var flight = db.Flights
               .Include(u => u.Airplane)
               .Where(o => o.Id == id)
               .FirstOrDefault();
            return flight;
        }

        [HttpPost]
        [Route("create")]
        public void Post(Flight flight)
        {

            var checkFlight = db.Flights
                .Where(u => u.Id == flight.Id)
                .FirstOrDefault();

            if (checkFlight == null)
            {
                db.Flights.Add(new Flight
                {
                    Id = flight.Id,
                    StartPoint = flight.StartPoint,
                    EndPoint = flight.EndPoint,
                    StartDate = flight.StartDate,
                    EndDate = flight.EndDate,
                    AirplaneId = flight.AirplaneId,
                    Airplane = flight.Airplane,
                });

                db.SaveChanges();
            }
        }

        [HttpPut]
        [Route("update")]
        public void Update(Flight employee)
        {

        }

        [HttpDelete]
        [Route("delete")]
        public void Delete(int id)
        {

        }
    }
}
