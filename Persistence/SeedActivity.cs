using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public class SeedActivity
    {
        

        public static async Task SeedData(DataContext context)
        {
            if (context.Activities.Any()) return;
            
            var activities = new List<Activity>
            {
                new Activity
                {
                     Type= "John Doe ",
                     Age = 18,
                    
                },
                new Activity
                {   
                    Type = "Jane Doe",
                    Age = 20,
                    
                }
                
            };

            await context.Activities.AddRangeAsync(activities);
            
            await context.SaveChangesAsync();
        }
    }
}