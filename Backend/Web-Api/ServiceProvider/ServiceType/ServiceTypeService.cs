using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Web_Api.Data;
using Web_Api.Dtos.ServiceTypeDto;
using Web_Api.Models;
using Web_Api.Models.ServiceTypeModel;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace Web_Api.ServiceProvider.ServiceTypeProvider
{
    public class ServiceTypeService : IServiceTypeService
    {
        private readonly DataContext _dataContext;
        private readonly IMapper _mapper;
        public ServiceTypeService(DataContext dataContext, IMapper mapper)
        {
            _dataContext = dataContext;
            _mapper = mapper;

        }
        public async Task<ServiceResponse<List<GetServiceTypeDto>>> GetServiceType()
        {
            var serviceResponse = new ServiceResponse<List<GetServiceTypeDto>>();

            List<ServiceType> serviceType = await _dataContext.ServiceTypes.Include(s => s.ProgramTypes).Where(s => s.IsDeleted == false).ToListAsync();

            serviceResponse.Data = serviceType.Select(s => _mapper.Map<GetServiceTypeDto>(s)).ToList();
            return serviceResponse;
        }
    }
}