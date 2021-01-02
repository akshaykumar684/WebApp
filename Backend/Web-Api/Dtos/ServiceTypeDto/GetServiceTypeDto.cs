using System.Collections.Generic;
using Web_Api.Dtos.ProgramTypeDto;
using Web_Api.Models.ProgramTypeModel;

namespace Web_Api.Dtos.ServiceTypeDto
{
    public class GetServiceTypeDto
    {
        public string ServiceTypeName { get; set; }

        public List<GetProgramTypeDto> ProgramTypes { get; set; }
    }
}