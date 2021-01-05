using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Web_Api.Data;
using Web_Api.Dtos.TopicDto;
using Web_Api.Models;

namespace Web_Api.ServiceProvider.TopicService
{
    public class TopicService : ITopicService
    {
        private readonly DataContext _dataContext;
        private readonly IMapper _mapper;
        public TopicService(DataContext dataContext, IMapper mapper)
        {
            _dataContext = dataContext;
            _mapper = mapper;
        }   
        public async Task<ServiceResponse<List<GetTopicDto>>> GetAllTopic()
        {
            var response = new ServiceResponse<List<GetTopicDto>>();

            var topics = await _dataContext.Topics.Where(t => t.IsDeleted == false).ToListAsync();

            if(topics.Count == 0 || topics == null)
            {
                response.IsSuccess = false;
                response.Message = "No Topics Found";
                return response;
            }

            response.Data = topics.Select(t => _mapper.Map<GetTopicDto>(t)).ToList();
            response.Message = "Successfull";
            return response;
        }
    }
}