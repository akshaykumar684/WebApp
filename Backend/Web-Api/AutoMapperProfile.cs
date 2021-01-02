using System.Linq;
using AutoMapper;
using Web_Api.Dtos.ProgramTypeDto;
using Web_Api.Dtos.ServiceTypeDto;
using Web_Api.Dtos.User;
using Web_Api.Models;
using Web_Api.Models.ProgramTypeModel;
using Web_Api.Models.ServiceTypeModel;

namespace WebApiLearn
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
             CreateMap<UserRegisterDto,User>();
             CreateMap<ServiceType,GetServiceTypeDto>();
             CreateMap<ProgramType,GetProgramTypeDto>();
        }
    }
}