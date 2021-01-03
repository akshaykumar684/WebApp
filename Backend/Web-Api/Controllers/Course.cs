using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Web_Api.ServiceProvider.CourseService;

namespace Web_Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class Course : ControllerBase
    {
        private readonly ICourseTypeService _courseTypeService;
        public Course(ICourseTypeService courseTypeService)
        {
            _courseTypeService = courseTypeService;
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetCourseById(int id)
        {
            return Ok(await _courseTypeService.GetAllCoursesByProgramId(id));
        }
    }
}