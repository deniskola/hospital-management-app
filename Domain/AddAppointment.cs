using System;

namespace Domain
{
    public class AddAppointment
    {

        public Guid Id { get; set; }
        public string CustomerName { get; set; }
        public DateTime AppointmentDate { get; set; }
        public string DoctorName { get; set; }
        public string Service { get; set; }
        public string Status { get; set; }
    }
}