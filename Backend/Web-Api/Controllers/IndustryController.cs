using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Web_Api.ServiceProvider.IndustryService;

namespace Web_Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class IndustryController : ControllerBase
    {
        private readonly IIndustryService _industryService;
        public IndustryController(IIndustryService industryService)
        {
            _industryService = industryService;
        }

        [HttpGet("GetAllIndutries")]
        public async Task<IActionResult> GetAllIndutries()
        {
            return Ok(await _industryService.GetAllIndustries());
        }
    }
}