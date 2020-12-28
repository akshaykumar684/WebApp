using System.Linq;
using AutoMapper;
using Web_Api.Dtos.User;
using Web_Api.Models;

namespace WebApiLearn
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
             CreateMap<UserRegisterDto,User>();
        }
    }
}