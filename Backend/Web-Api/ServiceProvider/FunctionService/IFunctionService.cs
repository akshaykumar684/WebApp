using System.Collections.Generic;
using System.Threading.Tasks;
using Web_Api.Dtos.FunctionDto;
using Web_Api.Models;

namespace Web_Api.ServiceProvider.FunctionService
{
    public interface IFunctionService
    {
         Task<ServiceResponse<List<GetFunctionDto>>> GetAllFunction();
    }
}