using AutoMapper;
using Domain;

namespace Application.CoreServices
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<AboutUs, AboutUs>();
        }
    }
}