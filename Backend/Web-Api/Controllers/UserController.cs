using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Web_Api.ServiceProvider.UserService;

namespace Web_Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;
        public UserController(IUserService userService)
        {
            _userService = userService;
        }
        [HttpGet("GetAllMentors")]
        public async Task<IActionResult> GetAllMentors()
        {
            return Ok(await _userService.GetAllUserOfMentorsType());
        }
        
        [HttpGet("{id}")]
        public async Task<IActionResult> GetMentorsById(int id)
        {
            return Ok(await _userService.GetUserOfMentorsTypeById(id));
        }
    }
}