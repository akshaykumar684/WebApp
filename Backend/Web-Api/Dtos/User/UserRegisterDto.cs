using Web_Api.Models.Enum;

namespace Web_Api.Dtos.User
{
    public class UserRegisterDto
    {
        public string Name { get; set; }

        public string Username { get; set; }

        public string Email { get; set; }

        public string Mobile { get; set; }

        public string Password { get; set; }

        public TypeOfUsers UserType { get; set; } = TypeOfUsers.Student;

        public Gender Gender { get; set; } = Gender.Male;
    }
}