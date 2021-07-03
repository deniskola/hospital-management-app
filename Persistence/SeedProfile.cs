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


            if (context.BodyInfos.Any()) {

            var bodyinfos = new List<BodyInfo>
            {
                new BodyInfo
                {
                    Mosha=50,
                    Pesha= 76.5,
                    GrupiGjakut="AB+",
                    Gjatesia=1.70
                }

            };
            await context.BodyInfos.AddRangeAsync(bodyinfos);
            await context.SaveChangesAsync();
            }

            if (context.PatientHistories.Any()) {

            var patienthistories = new List<PatientHistory>
            {
                new PatientHistory
                {
                    Date="24-06-2021",
                    Descritpion="Asthmna Undergoing for the pas 3 years."
                },
                 new PatientHistory
                {
                    Date="24-09-2021",
                    Descritpion="Cereals containing gluten allergy."
                }

            };
            await context.PatientHistories.AddRangeAsync(patienthistories);
            await context.SaveChangesAsync();
            }

            if (context.LabTests.Any()) {

            var labtests = new List<LabTest>
            {
                new LabTest
                {
                    Name="Bood test",
                    Date="20/05/2021",
                    Location="Arm"
                },
                 new LabTest
                {
                    Name="RAST test",
                    Date="01/05/2021",
                    Location="Arm"
                }

            };
            await context.LabTests.AddRangeAsync(labtests);
            await context.SaveChangesAsync();
            }

        }
    }
}