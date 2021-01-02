using System.ComponentModel.DataAnnotations;
using Web_Api.Models.ServiceTypeModel;

namespace Web_Api.Models.ProgramTypeModel
{
    public class ProgramType
    {
        public int ProgramTypeId { get; set; }

        [Required]
        public string ProgramTypeNames { get; set; }

        public bool IsDeleted { get; set; } = false;

        public ServiceType ServiceType { get; set; }
    }
}