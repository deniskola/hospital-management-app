using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : DbContext
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