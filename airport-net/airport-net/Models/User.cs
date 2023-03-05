namespace airport_net.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Login { get; set; }
        public string Password { get; set; }
        public string Role { get; set; }
        public string? Name { get; set; }
        public string? LastName { get; set; }
        public string? SurName { get; set; }
        public int? SerialOfPassport { get; set; }
        public int? NumberOfPassport { get; set; }
        public List<Ticket>? Ticket { get; set; }
    }
}
