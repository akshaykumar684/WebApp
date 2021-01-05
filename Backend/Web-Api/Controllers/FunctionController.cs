using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Web_Api.ServiceProvider.FunctionService;

namespace Web_Api.Controllers
{
    [ApiController]
    [Route("[controller]")]

    public class FunctionController : ControllerBase
    {
        private readonly IFunctionService _functionService;
        public FunctionController(IFunctionService functionService)
        {
            _functionService = functionService;
        }

        [HttpGet("GetAllFunctions")]
        public async Task<IActionResult> GetAllFunctions()
        {
            return Ok(await _functionService.GetAllFunction());
        }
    }
}