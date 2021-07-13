using System;
using System.ComponentModel.DataAnnotations;

namespace Domain
{
    public class WorkingHour
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string From { get; set; }
        public string To { get; set; }
    }
}