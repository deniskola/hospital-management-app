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
        public DbSet<AppUser> AppUsers { get; set; }
        public DbSet<Doctor> Doctors { get; set; }
        public DbSet<Patient> Patients { get; set; }
        public DbSet<BodyInfo> BodyInfos {get ; set ;}
        public DbSet<PatientHistory> PatientHistories {get; set;}
        public DbSet<LabTest> LabTests {get; set; }
        public DbSet<Procedure> Procedures {get; set;}
        public DbSet<Country> Countries { get; set; }

    }
}