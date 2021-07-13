using System.ComponentModel.DataAnnotations.Schema;

namespace Domain
{
    [Table("Nurses")]
    public class Nurse : AppUser
    {
        public string f { get; set; }

    }
}