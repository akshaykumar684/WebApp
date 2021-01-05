using Web_Api.Models.FunctionModel;

namespace Web_Api.Models.UserFunctionModel
{
    public class UserFunction
    {
        public int UserId { get; set; }

        public User User { get; set; }

        public int FunctionId { get; set; }

        public Function Function { get; set; }
    }
}