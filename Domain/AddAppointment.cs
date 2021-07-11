using System;
using System.ComponentModel.DataAnnotations;

namespace Domain
{
    public class AddAppointment 
    {
        [Key]
        public int Id { get; set; }
        public string CustomerName { get; set; }
        public DateTime AppointmentDate { get; set; }
        public string DoctorName { get; set; }
        public string Service { get; set; }
        public string Status { get; set; }
    }
}