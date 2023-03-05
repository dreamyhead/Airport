namespace airport_net.Models
{
    public class Airplane
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int NumberPlaces { get; set; }    
        public bool IsBusy { get; set; }
        public bool IsBought { get; set; }
        public bool IsDecommissioned { get; set; }
        public Flight? Flight { get; set; }
    }
}
