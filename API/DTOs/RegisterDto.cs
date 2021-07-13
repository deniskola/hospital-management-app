using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class RegisterDto
    {
        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [RegularExpression("(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$", ErrorMessage = "Password must be complex")]
        public string Password { get; set; }

        [Required]
        public string Username { get; set; }

        [Required]
        public string Role { get; set; }

        [Phone]
        public string PhoneNumber { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public string Gender { get; set; }

        public string DateOfBirth { get; set; }

    }
}