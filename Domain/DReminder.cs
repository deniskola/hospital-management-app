using System;
using System.ComponentModel.DataAnnotations;

namespace Domain
{
    public class DReminder
    {
        [Key]
        public int id{ get;set; }

        public string reminderTitle{get;set;}

        public string reminderDate{get;set;}
        
    }
}