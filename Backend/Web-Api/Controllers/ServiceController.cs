using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Web_Api.ServiceProvider.ServiceTypeProvider;

namespace Web_Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ServiceController : ControllerBase
    {
        private readonly IServiceTypeService _serviceTypeService;
        public ServiceController(IServiceTypeService serviceTypeService)
        {
            _serviceTypeService = serviceTypeService;
        }

        [HttpGet("GetServiceType")]
        public async Task<IActionResult> GetServiceType()
        {
            var result = await _serviceTypeService.GetServiceType();
            return Ok(result);
        }
    }
}