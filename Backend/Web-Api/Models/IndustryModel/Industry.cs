using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Web_Api.Models.UserIndustryModel;

namespace Web_Api.Models.IndustryModel
{
    public class Industry
    {
        public int IndustryId { get; set; }

        [Required]
        public string IndustryName { get; set; }

        public bool IsDeleted { get; set; } = false;

        public List<UserIndustry> UserIndustries { get; set; }
    }
}