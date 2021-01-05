using System.Linq;
using AutoMapper;
using Web_Api.Dtos.Course;
using Web_Api.Dtos.FunctionDto;
using Web_Api.Dtos.IndustryDto;
using Web_Api.Dtos.ProgramTypeDto;
using Web_Api.Dtos.ServiceTypeDto;
using Web_Api.Dtos.TopicDto;
using Web_Api.Dtos.User;
using Web_Api.Models;
using Web_Api.Models.CourseModel;
using Web_Api.Models.FunctionModel;
using Web_Api.Models.IndustryModel;
using Web_Api.Models.ProgramTypeModel;
using Web_Api.Models.ServiceTypeModel;
using Web_Api.Models.TopicModel;

namespace WebApiLearn
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            // CreateMap<User, GetMentorDto>()
            // .ForMember(dto => dto.Industries, u => u.MapFrom(u => u.UserIndustries.Select(ui => ui.Industry)));

            CreateMap<User, GetMentorDto>()
           .ForMember(dto => dto.Industries, u => u.MapFrom(u => u.UserIndustries.Select(ui => ui.Industry)))
           .ForMember(dto => dto.Functions, u => u.MapFrom(u => u.UserFunctions.Select(uf => uf.Function)))
           .ForMember(dto => dto.Topics, u => u.MapFrom(u => u.UserTopics.Select(ut => ut.Topic)));

            CreateMap<UserRegisterDto, User>();
            CreateMap<ServiceType, GetServiceTypeDto>();
            CreateMap<ProgramType, GetProgramTypeDto>();
            CreateMap<Course, GetCourseDto>();
            CreateMap<Industry, GetIndustryDto>();
            CreateMap<Function, GetFunctionDto>();
            CreateMap<Topic, GetTopicDto>();
        }
    }
}