using AutoMapper;
using Domain;

namespace Application.AboutCore
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<About, About>();
        }
    }
}