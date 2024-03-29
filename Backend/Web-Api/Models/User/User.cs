using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Web_Api.Models.Enum;
using Web_Api.Models.UserFunctionModel;
using Web_Api.Models.UserIndustryModel;
using Web_Api.Models.UserTopicModel;

namespace Web_Api.Models
{
    public class User
    {
        public int UserId { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Username { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public string Mobile { get; set; }

        public bool isDeleted { get; set; } = false;

        public byte[] PasswordHash { get; set; }

        public byte[] PasswordSalt { get; set; }

        public TypeOfUsers UserType { get; set; } = TypeOfUsers.Student;

        public Gender Gender { get; set; } = Gender.Male;

        public List<UserIndustry> UserIndustries { get; set; }

        public List<UserFunction> UserFunctions { get; set; }

        public List<UserTopic> UserTopics { get; set; }
    }
}