using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Web_Api.ServiceProvider.TopicService;

namespace Web_Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TopicController : ControllerBase
    {
        private readonly ITopicService _topicService;
        public TopicController(ITopicService topicService)
        {
            _topicService = topicService;
        }

        [HttpGet("GetAllTopics")]
        public async Task<IActionResult> GetAllTopics()
        {
            return Ok(await _topicService.GetAllTopic());
        }
    }
}