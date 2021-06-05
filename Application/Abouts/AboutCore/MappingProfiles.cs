using AutoMapper;
using Domain;

namespace Application.Abouts.AboutCore
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<AddAppointment, AddAppointment>();
        }
    }
}