using Microsoft.EntityFrameworkCore;
using Web_Api.Models;
using Web_Api.Models.CourseModel;
using Web_Api.Models.IndustryModel;
using Web_Api.Models.ProgramTypeModel;
using Web_Api.Models.ServiceTypeModel;

namespace Web_Api.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }

        public DbSet<ServiceType> ServiceTypes{get;set;}

        public DbSet<ProgramType> ProgramTypes{get;set;}

        public DbSet<Course> Courses { get; set; }

        public DbSet<Industry> Industries {get;set;}
    }
}