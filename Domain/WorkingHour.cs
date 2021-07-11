using System;
using System.ComponentModel.DataAnnotations;

namespace Domain
{
    public class WorkingHour
    {
        [Key]
        public int Id { get; set; }
        public String Name { get; set; }
        public DateTime From { get; set; }
        public DateTime To { get; set; }
    }
}