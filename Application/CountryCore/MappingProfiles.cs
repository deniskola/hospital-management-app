using AutoMapper;
using Domain;

namespace Application.CountryCore
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Country, Country>();
        }
    }
}