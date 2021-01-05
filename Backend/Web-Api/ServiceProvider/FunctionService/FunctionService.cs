using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Web_Api.Data;
using Web_Api.Dtos.FunctionDto;
using Web_Api.Models;

namespace Web_Api.ServiceProvider.FunctionService
{
    public class FunctionService : IFunctionService
    {
        private readonly DataContext _dataContext;
        private readonly IMapper _mapper;
        public FunctionService(DataContext dataContext, IMapper mapper)
        {
            _dataContext = dataContext;
            _mapper = mapper;
        }
        public async Task<ServiceResponse<List<GetFunctionDto>>> GetAllFunction()
        {
            var response = new ServiceResponse<List<GetFunctionDto>>();

            var functions = await _dataContext.Functions.Where(f => f.IsDeleted == false).ToListAsync();

            if(functions.Count == 0 || functions == null)
            {
                response.IsSuccess = false;
                response.Message = "No Function Found";
                return response;
            }

            response.Data = functions.Select(f => _mapper.Map<GetFunctionDto>(f)).ToList();
            response.Message = "Successfull";

            return response;
        }
    }
}