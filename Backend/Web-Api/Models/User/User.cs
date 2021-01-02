using System.ComponentModel.DataAnnotations;
using Web_Api.Models.Enum;

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

        public byte[] PasswordHash { get; set; }

        public byte[] PasswordSalt { get; set; }

        public TypeOfUsers UserType { get; set; } = TypeOfUsers.Student;

        public Gender Gender { get; set; } = Gender.Male;
    }
}