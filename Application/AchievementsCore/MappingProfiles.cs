using AutoMapper;
using Domain;

namespace Application.AchievementsCore
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Achievement,Achievement>();
        }
    }
}