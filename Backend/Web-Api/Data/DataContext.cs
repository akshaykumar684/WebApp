using Microsoft.EntityFrameworkCore;
using Web_Api.Models;
using Web_Api.Models.CourseModel;
using Web_Api.Models.FunctionModel;
using Web_Api.Models.IndustryModel;
using Web_Api.Models.ProgramTypeModel;
using Web_Api.Models.ServiceTypeModel;
using Web_Api.Models.TopicModel;
using Web_Api.Models.UserFunctionModel;
using Web_Api.Models.UserIndustryModel;
using Web_Api.Models.UserTopicModel;

namespace Web_Api.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }

        public DbSet<ServiceType> ServiceTypes { get; set; }

        public DbSet<ProgramType> ProgramTypes { get; set; }

        public DbSet<Course> Courses { get; set; }

        public DbSet<Industry> Industries { get; set; }

        public DbSet<UserIndustry> UserIndustries { get; set; }

        public DbSet<Function> Functions { get; set; }

        public DbSet<UserFunction> UserFunctions { get; set; }

        public DbSet<Topic> Topics { get; set; }

        public DbSet<UserTopic> UserTopics { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UserIndustry>()
                .HasKey(ui => new { ui.UserId, ui.IndustryId });

            modelBuilder.Entity<UserFunction>()
               .HasKey(ui => new { ui.UserId, ui.FunctionId });

            modelBuilder.Entity<UserTopic>()
               .HasKey(ui => new { ui.UserId, ui.TopicId });
        }
    }
}