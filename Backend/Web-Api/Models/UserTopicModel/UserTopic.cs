using Web_Api.Models.TopicModel;

namespace Web_Api.Models.UserTopicModel
{
    public class UserTopic
    {
        public int UserId { get; set; }

        public User User { get; set; }

        public int TopicId { get; set; }

        public Topic Topic { get; set; }
    }
}