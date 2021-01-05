using System.ComponentModel.DataAnnotations;

namespace Web_Api.Models.FunctionModel
{
    public class Function
    {
        public int FunctionId { get; set; }

        [Required]
        public string FunctionName { get; set; }

        public bool IsDeleted { get; set; } = false;
    }
}