using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Identity;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context, UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                var users = new List<AppUser>{
                    new AppUser{FirstName = "Bob", UserName = "bob", Email ="bob@test.com"},
                    new AppUser{FirstName = "Tom", UserName = "tom", Email ="tom@test.com"},
                    new AppUser{FirstName = "Jane", UserName = "jane", Email ="jane@test.com"},
                };

                foreach (var user in users)
                {
                    await userManager.CreateAsync(user, "Pa$$w0rd");
                }

                var doctors = new List<Doctor>{
                    new Doctor{FirstName="Jane",LastName="Doe",DateOfBirth="18/06/1996",Gender="F",
                                UserName = "janeDoe", Email ="janeDoe@test.com",Role="Doctor",
                                Designation="Test",Department="Test",Address="Test",Specialist="Test2",BloodGroup="tessst",Degree="test"}
                };

                foreach (var doc in doctors)
                {
                    await userManager.CreateAsync(doc, "Pa$$sw0rd");
                }

                var patients = new List<Patient>{
                    new Patient{FirstName="John",LastName="Doe",DateOfBirth="18/06/1996",Gender="M",
                                UserName = "johnDoe", Email ="johnDoe@test.com",Role="Patient",
                                BloodGroup="A+",Disease="test"}
                };

                foreach (var patient in patients)
                {
                    await userManager.CreateAsync(patient, "Pa$$sw0rd");
                }
            }

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