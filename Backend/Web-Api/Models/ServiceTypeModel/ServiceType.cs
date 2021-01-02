using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Web_Api.Models.ProgramTypeModel;

namespace Web_Api.Models.ServiceTypeModel
{
    public class ServiceType
    {
        public int ServiceTypeId { get; set; }

        [Required]
        public string ServiceTypeName { get; set; }

        public List<ProgramType> ProgramTypes { get; set; }
    }
}