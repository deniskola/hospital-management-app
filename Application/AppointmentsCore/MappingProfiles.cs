using AutoMapper;
using Domain;

namespace Application.AppointmentsCore
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<AddAppointment,AddAppointment>();
        }
    }
}