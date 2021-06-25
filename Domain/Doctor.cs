using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain
{
    [Table("Doctors")]
    public class Doctor:AppUser
    {
        public string Designation{get;set;}
        public string Department{get;set;}
        public string Address{get;set;}
        public string Specialist{get;set;}
        public string BloodGroup{get;set;}
        public string Degree{get;set;}
    }
}