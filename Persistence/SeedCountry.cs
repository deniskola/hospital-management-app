using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Identity;

namespace Persistence
{
    public class SeedCountry
    {
        public static async Task SeedData(DataContext context)
        {

            if (context.Countries.Any()) return;

            var country = new List<Country>
            {
                new Country
                {
                    Text = "Albania",
                    Value = "al",
                    Flag = "al"
                }
            };

            await context.Countries.AddRangeAsync(country);
            await context.SaveChangesAsync();
        }
    }
}