namespace airport_net.Models
{
    public class Flight
    {
        public int Id { get; set; }
        public string StartPoint { get; set; }
        public string EndPoint { get; set; }
        public string StartDate { get; set; }
        public string EndDate { get; set; }
        public List<Ticket>? Tickets { get; set; }
        public int? AirplaneId { get; set; }
        public Airplane? Airplane { get; set; }
    }
}
