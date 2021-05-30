using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public class SeedAppointments
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.Appointments.Any()) return;
            
            var appointments = new List<AddAppointment>
            {
                new AddAppointment
                {
                    CustomerName = "Rinor Restelica",
                    AppointmentDate = DateTime.Now.AddMonths(-2),
                    DoctorName = "Jane Doe",
                    Service = "Dental Examination",
                    Status = "Approved",
                },
                new AddAppointment
                {   
                    CustomerName = "Lavdim Menxhiqi",
                    AppointmentDate = DateTime.Now.AddMonths(-1),
                    DoctorName = "Jane Doe",
                    Service = "Dental Examination",
                    Status = "Approved",
                }
            };

            await context.Appointments.AddRangeAsync(appointments);
            await context.SaveChangesAsync();
        }
    }
}