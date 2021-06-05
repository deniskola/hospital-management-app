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
                    reminderTitle = "Surgery for patient Jane ",
                    reminderDate = "2021-2-2",
                },
                new DReminder
                {   
                    reminderTitle = "Surgery for patient John",
                    reminderDate = "2021-2-2",
                }
            };

            await context.DReminders.AddRangeAsync(reminders);
            await context.SaveChangesAsync();
        }
    }
}