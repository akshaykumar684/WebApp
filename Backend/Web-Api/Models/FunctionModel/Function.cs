using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Web_Api.Models.UserFunctionModel;

namespace Web_Api.Models.FunctionModel
{
    public class Function
    {
        public int FunctionId { get; set; }

        [Required]
        public string FunctionName { get; set; }

        public bool IsDeleted { get; set; } = false;

        public List<UserFunction> UserFunctions { get; set; }
    }
}