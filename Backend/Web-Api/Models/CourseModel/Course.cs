using System.ComponentModel.DataAnnotations;
using Web_Api.Models.ProgramTypeModel;

namespace Web_Api.Models.CourseModel
{
    public class Course
    {
        public int CourseId { get; set; }

        [Required]
        public string CourseName { get; set; }

        public bool IsDeleted { get; set; } = false;

        public ProgramType ProgramType { get; set; }
    }
}