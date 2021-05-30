using AutoMapper;
using Domain;

namespace Application.CoreP
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles ()
        {
            CreateMap<PAllergies, PAllergies>();
        }
    }
}