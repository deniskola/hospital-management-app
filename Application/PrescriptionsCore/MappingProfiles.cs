using AutoMapper;
using Domain;

namespace Application.PrescriptionsCore
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Prescription,Prescription>();
        }
    }
}