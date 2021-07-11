using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public class SeedAchievement
    {
       public static async Task SeedData(DataContext context)
        {

            if (context.Achievements.Any()) return;

            var achievements = new List<Achievement>
            {
                new Achievement
                {
                    Photo = "achievement1",
                    Title = "Best Hospital in Kosovo 2018",
                    Description = "As a premier healthcare facility, Hospital X has been recognized for clinical excellence and patient satisfaction"
                }
            };

            await context.Achievements.AddRangeAsync(achievements);
            await context.SaveChangesAsync();
        } 
    }
}