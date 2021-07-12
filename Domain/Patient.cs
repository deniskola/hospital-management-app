using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;


namespace Domain
{
    [Table("Patients")]
    public class Patient : AppUser
    {
        public string BloodGroup { get; set; }
        public string Disease { get; set; }
        public List<BirthRaport> BirthRaports { get; set;}
    }
}