using AutoMapper;
using Domain;

namespace Application.CoreP
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles ()
        {
            CreateMap<PAllergies, PAllergies>();
            CreateMap<BodyInfo, BodyInfo>();
            CreateMap<PatientHistory, PatientHistory>();
            CreateMap<LabTest, LabTest>();
            CreateMap<Procedure, Procedure>();
        }
    }
}