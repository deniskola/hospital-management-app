using AutoMapper;
using Domain;

namespace Application.CityCore
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<City, City>();
        }
    }
}