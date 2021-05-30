using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public class SeedProfile
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.PAllergies.Any()) return;

            var allergies = new List<PAllergies>
            {
                new PAllergies
                {
                    Type = "Pollen Allergy",
                    Description = "People that develop allergic symptoms to pollen, which are together called hay fever (runny nose and itchy and watery eyes), and asthma.",
                },
                new PAllergies
                {
                    Type = "Cereals containing gluten",
                    Description = "The symptoms of gluten allergy includes: hives or skin rash, nausea, stomach cramps, indigestion, vomiting or diarrhea",
                }
            };

            await context.PAllergies.AddRangeAsync(allergies);
            await context.SaveChangesAsync();
        }
    }
}