using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.DReminders.Any()) return;
            
            var reminders = new List<DReminder>
            {
                new DReminder
                {
                    Title = "Surgery for patient Jane ",
                    Date = DateTime.Now.AddMonths(-2),
                },
                new DReminder
                {   
                    Title = "Surgery for patient John",
                    Date = DateTime.Now.AddMonths(-1),
                }
            };

            await context.DReminders.AddRangeAsync(reminders);
            await context.SaveChangesAsync();
        }
    }
}