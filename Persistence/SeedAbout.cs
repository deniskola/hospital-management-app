using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public class SeedAbout
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.About.Any()) return;

            var about = new List<About>
            {
                new About
                {
                    Title = "Title 1",
                    Description = "Lorem Ipsum",
                },
                new About
                {
                    Title = "Title 2",
                    Description = "Lorem Ipsum",
                }
            };

            await context.About.AddRangeAsync(about);
            await context.SaveChangesAsync();
        }
    }
}