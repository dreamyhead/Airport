using airport_net.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Xml.Linq;

namespace airport_net.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AirplaneController : ControllerBase
    {
        public ApplicationContext db = new ApplicationContext();

        [HttpGet]
        [Route("get")]
        public List<Airplane> Get()
        {
            var airplanes = db.Airplanes.ToList();
            return airplanes;
        }

        [HttpGet]
        [Route("GetFlight")]
        public Airplane Get(int id)
        {
            var airplane = db.Airplanes
                .Where(o => o.Id == id)
                .FirstOrDefault();
            return airplane;
        }

        [HttpPost]
        [Route("create")]
        public void Post(Airplane airplane)
        {
            var checkAirplane = db.Airplanes
                .Where(u => u.Id == airplane.Id)
                .FirstOrDefault();

            if (checkAirplane == null)
            {
                db.Airplanes.Add(new Airplane
                {
                    Id = airplane.Id,
                    Name = airplane.Name,
                    NumberPlaces = airplane.NumberPlaces,
                    IsBusy = airplane.IsBusy,
                    IsBought = airplane.IsBought,
                    IsDecommissioned = airplane.IsDecommissioned
                });

                db.SaveChanges();
            }
        }

        [HttpGet]
        [Route("updatedec")]
        public void UpdateDecommissioned(int id)
        {
            var airplane = db.Airplanes.Find(id);
            airplane.IsDecommissioned = true;
            db.Airplanes.Update(airplane);
            db.SaveChanges();
        }

        [HttpGet]
        [Route("updatebusy")]
        public void UpdateBusy(int id)
        {
            var airplane = db.Airplanes.Find(id);
            airplane.IsBusy = true;
            db.Airplanes.Update(airplane);
            db.SaveChanges();
        }

        [HttpGet]
        [Route("updatebought")]
        public void UpdateBought(int id)
        {
            var airplane = db.Airplanes.Find(id);
            airplane.IsBought = true;
            db.Airplanes.Update(airplane);
            db.SaveChanges();
        }

        [HttpDelete]
        [Route("delete")]
        public void Delete(int id)
        {
            var airplane = db.Airplanes.Find(id);

            if (airplane != null)
            {
                db.Airplanes.Remove(airplane);
                db.SaveChanges();
            }
        }
    }
}
