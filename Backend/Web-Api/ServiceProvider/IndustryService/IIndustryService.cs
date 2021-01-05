using System.Collections.Generic;
using System.Threading.Tasks;
using Web_Api.Dtos.IndustryDto;
using Web_Api.Models;

namespace Web_Api.ServiceProvider.IndustryService
{
    public interface IIndustryService
    {
         Task<ServiceResponse<List<GetIndustryDto>>> GetAllIndustries();
    }
}