using System.ComponentModel.DataAnnotations.Schema;
using System;

namespace Domain
{
    public class DeathRaport
    {
        public int id { get; set; }
        [Column(TypeName="Date")]
        public DateTime deathDate { get; set; }
        public string causeOfDeath { get; set; }
    }
}