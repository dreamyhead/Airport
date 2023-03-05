using airport_net.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace airport_net
{
    public class ApplicationContext : DbContext
    {
        public DbSet<Airplane> Airplanes { get; set; } = null!;
        public DbSet<User> Users { get; set; } = null!;
        public DbSet<Ticket> Tickets { get; set; } = null!;
        public DbSet<Flight> Flights { get; set; } = null!;
        public ApplicationContext()
        {

        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseNpgsql("Host=localhost;Port=5432;Database=airportdb;Username=postgres;Password=admin");
        }
    }
}
