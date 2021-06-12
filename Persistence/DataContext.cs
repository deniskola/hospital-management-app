using Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : IdentityDbContext<AppUser>
    {
        public DataContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<About> About { get; set; }
        public DbSet<DReminder> DReminders { get; set; }
        public DbSet<PAllergies> PAllergies { get; set; }
        public DbSet<AboutUs> SAboutUs { get; set; }
        public DbSet<AddAppointment> Appointments { get; set; }
        public DbSet<Activity> Activities { get; set; }



    }
}