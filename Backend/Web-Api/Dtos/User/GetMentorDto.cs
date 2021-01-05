using System.Collections.Generic;
using Web_Api.Dtos.FunctionDto;
using Web_Api.Dtos.IndustryDto;

namespace Web_Api.Dtos.User
{
    public class GetMentorDto
    {
        public int UserId { get; set; }

        public string Name { get; set; }

        public string Username { get; set; }

        public string Email { get; set; }

        public string Mobile { get; set; }

        public List<GetIndustryDto> Industries { get; set; }

        public List<GetFunctionDto> Functions { get; set; }
    }
}