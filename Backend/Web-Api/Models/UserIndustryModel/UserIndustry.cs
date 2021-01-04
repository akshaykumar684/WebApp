using Web_Api.Models.IndustryModel;

namespace Web_Api.Models.UserIndustryModel
{
    public class UserIndustry
    {
        public int UserId { get; set; }

        public User User { get; set; }

        public int IndustryId { get; set; } 

        public Industry Industry { get; set; }
    }
}