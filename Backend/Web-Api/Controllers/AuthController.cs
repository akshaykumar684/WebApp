using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Web_Api.Data;
using Web_Api.Dtos.User;
using Web_Api.Models;

namespace Web_Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepository _authRepo;
        public AuthController(IAuthRepository authRepo)
        {
            _authRepo = authRepo;
        }

        [HttpPost("Register")]
        public async Task<IActionResult> Register(UserRegisterDto user)
        {
            var response = await _authRepo.Register(new User{ Username = user.Username},user.Password);
            if(!response.Success)
            {
                return BadRequest(response);
            }
            return Ok(response);
        }

        [HttpPost("Login")]
        public async Task<IActionResult> Login(UserLoginDto user)
        {
            var response = await _authRepo.Login(user.Username,user.Password);
            if(!response.Success)
            {
                return BadRequest(response);
            }
            return Ok(response);
        }
    }
}