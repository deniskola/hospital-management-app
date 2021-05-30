using AutoMapper;
using Domain;

namespace Application.DashboardCore
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<DReminder,DReminder>();
        }
    }
}