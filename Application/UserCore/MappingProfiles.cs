using AutoMapper;
using Domain;

namespace Application.UserCore
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<AppUser, AppUser>();
        }
    }
}