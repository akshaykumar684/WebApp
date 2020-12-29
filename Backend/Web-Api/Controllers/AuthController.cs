using System.Threading.Tasks;
using AutoMapper;
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
        private readonly IMapper _mapper;
        public AuthController(IAuthRepository authRepo,IMapper mapper)
        {
            _authRepo = authRepo;
            _mapper = mapper;
        }

        [HttpPost("Register")]
        public async Task<IActionResult> Register(UserRegisterDto newuser)
        {
            User user = _mapper.Map<User>(newuser);
            var response = await _authRepo.Register(user,newuser.Password);
            // if(!response.IsSuccess)
            // {
            //     return BadRequest(response);
            // }
            return Ok(response);
        }

        [HttpPost("Login")]
        public async Task<IActionResult> Login(UserLoginDto user)
        {
            var response = await _authRepo.Login(user.Username,user.Password);
            // if(!response.IsSuccess)
            // {
            //     return BadRequest(response);
            // }
            return Ok(response);
        }
    }
}