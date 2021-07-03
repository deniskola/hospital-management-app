using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Identity;

namespace Persistence
{
    public class SeedCity
    {
        public static async Task SeedData(DataContext context)
        {

            if (context.Cities.Any()) return;

            var city = new List<City>
            {
                new City
                {
                    Text = "Tirana",
                    Value = "tirana",
                    Country = "Albania"
                }
            };

            await context.Cities.AddRangeAsync(city);
            await context.SaveChangesAsync();
        }
    }
}