using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain
{
    public class DReminder
    {
        [Key]
        public int id{ get;set; }
        public string reminderTitle{get;set;}
        [Column(TypeName="Date")]
        public DateTime reminderDate{get;set;}
        
    }
}