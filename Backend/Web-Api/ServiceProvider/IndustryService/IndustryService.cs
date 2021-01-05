using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Web_Api.Data;
using Web_Api.Dtos.IndustryDto;
using Web_Api.Models;

namespace Web_Api.ServiceProvider.IndustryService
{
    public class IndustryService : IIndustryService
    {
        private readonly DataContext _dataContext;
        private readonly IMapper _mapper;

        public IndustryService(DataContext dataContext, IMapper mapper)
        {
            _dataContext = dataContext;
            _mapper = mapper;
        }
        public async Task<ServiceResponse<List<GetIndustryDto>>> GetAllIndustries()
        {
            var response = new ServiceResponse<List<GetIndustryDto>>();

            var industries = await _dataContext.Industries.Where(i => i.IsDeleted == false).ToListAsync();

            if(industries.Count == 0 || industries == null)
            {
                response.IsSuccess = false;
                response.Message = "No Industry found";
                return response;
            }

            response.Data = industries.Select(i => _mapper.Map<GetIndustryDto>(i)).ToList();
            response.Message = "SucessFull";
            return response;
        }
    }
}