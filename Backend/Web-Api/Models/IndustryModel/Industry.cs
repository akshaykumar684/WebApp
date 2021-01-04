using System.ComponentModel.DataAnnotations;

namespace Web_Api.Models.IndustryModel
{
    public class Industry
    {
        public int IndustryId { get; set; }

        [Required]
        public string IndustryName { get; set; }

        public bool IsDeleted { get; set; } = false;
    }
}