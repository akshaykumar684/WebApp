using System.Collections.Generic;
using System.Threading.Tasks;
using Web_Api.Dtos.ServiceTypeDto;
using Web_Api.Models;
using Web_Api.Models.ServiceTypeModel;

namespace Web_Api.ServiceProvider.ServiceTypeProvider
{
    public interface IServiceTypeService
    {
         Task<ServiceResponse<List<GetServiceTypeDto>>> GetServiceType();
    }
}