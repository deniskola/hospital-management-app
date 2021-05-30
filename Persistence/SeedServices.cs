using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;



namespace Persistence
{
    public class SeedServices
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.SAboutUs.Any()) return;

            var aboutus = new List<AboutUs>
            {
                new AboutUs
                {
                    Title = "About Us ",
                    Text = "This is About Us Text ",
                },
                new AboutUs
                {
                    Title = "About Us 2",
                    Text = "This is About Us Text 2",
                }
            };

            await context.SAboutUs.AddRangeAsync(aboutus);
            await context.SaveChangesAsync();
        }
    }
}
