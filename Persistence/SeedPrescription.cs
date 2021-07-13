using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public class SeedPrescription
    {
        public static async Task SeedData(DataContext context)
        {
            if(context.Prescriptions.Any()) return;
            var prescriptions = new List<Prescription>
            {
                new Prescription
                {
                    Number = 2,
                    CustomerName = "Lavdim Menxhiqi",
                    DoctorName = "Jane Doe",
                    RX = "Paracetamol 2x per day",
                }
            };

            await context.Prescriptions.AddRangeAsync(prescriptions);
            await context.SaveChangesAsync();
        }
    }
}