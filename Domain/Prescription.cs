using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace Domain
{
    public class Prescription 
    {
        [Key]
        public int Id { get; set; }
        public int Number { get; set; }
        public string CustomerName { get; set; }
        public string DoctorName { get; set; }
        public string RX { get; set; }
    }
}