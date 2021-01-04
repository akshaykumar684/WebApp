using System.Collections.Generic;
using System.Threading.Tasks;
using Web_Api.Models;

namespace Web_Api.ServiceProvider.UserService
{
    public interface IUserService
    {
         Task<ServiceResponse<List<User>>> GetAllUserOfMentorsType();
    }
}