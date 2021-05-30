using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options):base(options){

        }

        public DbSet<DReminder> DReminders{get;set;}
        public DbSet<PAllergies> PAllergies{get;set;}

    }
}