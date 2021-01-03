using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Web_Api.Models.ServiceTypeModel;
using  Web_Api.Models.CourseModel;
namespace Web_Api.Models.ProgramTypeModel
{
    public class ProgramType
    {
        public int ProgramTypeId { get; set; }

        [Required]
        public string ProgramTypeNames { get; set; }

        public bool IsDeleted { get; set; } = false;

        public ServiceType ServiceType { get; set; }

        public List<Course> Courses { get; set; }
    }
}