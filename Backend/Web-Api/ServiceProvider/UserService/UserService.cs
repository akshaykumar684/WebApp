using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Web_Api.Data;
using Web_Api.Dtos.User;
using Web_Api.Models;
using Web_Api.Models.Enum;

namespace Web_Api.ServiceProvider.UserService
{
    public class UserService : IUserService
    {
        private readonly DataContext _dataContext;
        private readonly IMapper _mapper;
        public UserService(IMapper mapper,DataContext dataContext)
        {
            _mapper = mapper;
            _dataContext = dataContext;
        }

        public async Task<ServiceResponse<List<GetMentorDto>>> GetAllUserOfMentorsType()
        {
            var user = await _dataContext.Users.Include(ui => ui.UserIndustries).ThenInclude(i => i.Industry)
                              .Include(uf => uf.UserFunctions).ThenInclude(f => f.Function)
                              .Where(u => u.isDeleted == false && u.UserType == TypeOfUsers.Mentor).ToListAsync();

            var response = new ServiceResponse<List<GetMentorDto>>();

            response.Data = user.Select(u => _mapper.Map<GetMentorDto>(u)).ToList();

            return response;
        }

        public async Task<ServiceResponse<GetMentorDto>> GetUserOfMentorsTypeById(int Id)
        {
            var user = await _dataContext.Users.Include(ui => ui.UserIndustries).ThenInclude(i => i.Industry)
                              .Include(uf => uf.UserFunctions).ThenInclude(f => f.Function)
                              .FirstOrDefaultAsync(u => u.UserId == Id);
            var response = new ServiceResponse<GetMentorDto>();
            response.Data = _mapper.Map<GetMentorDto>(user);

            return response;
        }
    }
}