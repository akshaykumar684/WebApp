using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Web_Api.Data;
using Web_Api.Models;
using Web_Api.Models.Enum;

namespace Web_Api.ServiceProvider.UserService
{
    public class UserService : IUserService
    {
        private readonly DataContext _dataContext;
        public UserService(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public async Task<ServiceResponse<List<User>>> GetAllUserOfMentorsType()
        {
            var user = await _dataContext.Users.Include(ui => ui.UserIndustries).ThenInclude(i => i.Industry)
                        .Where(u => u.isDeleted == false && u.UserType == TypeOfUsers.Mentor).ToListAsync();

            var response = new ServiceResponse<List<User>>();

            response.Data = user;

            return response;
        }
    }
}