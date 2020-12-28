using Web_Api.Models.Enum;

namespace Web_Api.Models
{
    public class User
    {
        public int UserId { get; set; }

        public string Name { get; set; }

        public string Username { get; set; }

        public string Email { get; set; }

        public int MobileNo { get; set; }

        public byte[] PasswordHash { get; set; }

        public byte[] PasswordSalt { get; set; }

        public TypeOfUsers UserType { get; set; }

        public Gender Gender { get; set; }
    }
}