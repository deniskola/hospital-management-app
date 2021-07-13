using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public class SeedWorkingHours
    {
        public static async Task SeedData(DataContext context)
        {

            if (context.WorkingHours.Any()) return;

            var workinghours = new List<WorkingHour>
            {
                new WorkingHour
                {
                    Name = "Monday",
                    From = "08:00",
                    To = "16:00"
                },
                new WorkingHour
                {
                    Name = "Tuesday",
                    From = "08:00",
                    To = "16:00"
                }
            };

            await context.WorkingHours.AddRangeAsync(workinghours);
            await context.SaveChangesAsync();
        }
    }
}