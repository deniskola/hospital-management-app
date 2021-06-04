using AutoMapper;
using Domain;

namespace Application.CoreActivity
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Activity, Activity>();
        }
    }
}