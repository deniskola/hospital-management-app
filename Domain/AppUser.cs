using Microsoft.AspNetCore.Identity;

namespace Domain
{
    public class AppUser : IdentityUser
    {
        public string DisplayName { get; set;}
        public string Role { get; set;}
        public string FirstName {get;set;}
        public string LastName{get;set;}
        public string DateOfBirth{get;set;}
        public string Gender{get;set;}  

    }
}