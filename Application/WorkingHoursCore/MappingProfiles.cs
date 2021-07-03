using AutoMapper;
using Domain;

namespace Application.WorkingHoursCore
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<WorkingHour,WorkingHour>();
        }
    }
}