using System.ComponentModel.DataAnnotations;

namespace Web_Api.Models.TopicModel
{
    public class Topic
    {
        public int TopicId { get; set; }

        [Required]
        public string TopicName { get; set; }

        public bool IsDeleted { get; set; } = false;
    }
}