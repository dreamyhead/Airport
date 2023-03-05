namespace airport_net.Models
{
    public class Ticket
    {
        public int Id { get; set; }
        public int NumberOfFlight { get; set; }
        public int NumberOfPlace { get; set; }
        public int Price { get; set; }
        public bool isBusy { get; set; }
        public int? FlightId { get; set; }
        public Flight? Flight { get; set; }
        public int? UserId { get; set; }
        public User? User { get; set; }

    }
}
