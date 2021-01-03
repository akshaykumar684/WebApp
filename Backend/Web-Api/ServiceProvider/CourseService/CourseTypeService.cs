using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Web_Api.Data;
using Web_Api.Dtos.Course;
using Web_Api.Models;

namespace Web_Api.ServiceProvider.CourseService
{
    public class CourseTypeService : ICourseTypeService
    {
        private readonly DataContext _dataContext;
        private readonly IMapper _mapper;
        public CourseTypeService(DataContext dataContext, IMapper mapper)
        {
            _dataContext = dataContext;
            _mapper = mapper;
        }
        public async Task<ServiceResponse<List<GetCourseDto>>> GetAllCoursesByProgramId(int programTypeId)
        {
            var response = new ServiceResponse<List<GetCourseDto>>();

            var course =  await _dataContext.Courses.Where(c => c.ProgramType.ProgramTypeId == programTypeId && c.IsDeleted == false).ToListAsync();

            response.Data = course.Select(c => _mapper.Map<GetCourseDto>(c)).ToList();

            if(response.Data.Count>0)
                response.Message = "Sucess";
            else
                response.Message = "No Course found for given program";

            return response;
        }
    }
}