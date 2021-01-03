using System.Collections.Generic;
using System.Threading.Tasks;
using Web_Api.Dtos.Course;
using Web_Api.Models;

namespace Web_Api.ServiceProvider.CourseService
{
    public interface ICourseTypeService
    {
        Task<ServiceResponse<List<GetCourseDto>>> GetAllCoursesByProgramId(int programTypeId);
    }
}