using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Web_Api.Models.UserTopicModel;

namespace Web_Api.Models.TopicModel
{
    public class Topic
    {
        public int TopicId { get; set; }

        [Required]
        public string TopicName { get; set; }

        public bool IsDeleted { get; set; } = false;

        public List<UserTopic> UserTopics { get; set; }
    }
}