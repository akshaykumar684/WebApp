using System.Collections.Generic;
using System.Threading.Tasks;
using Web_Api.Dtos.TopicDto;
using Web_Api.Models;

namespace Web_Api.ServiceProvider.TopicService
{
    public interface ITopicService
    {
         Task<ServiceResponse<List<GetTopicDto>>> GetAllTopic();
    }
}