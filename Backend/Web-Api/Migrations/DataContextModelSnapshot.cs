﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Web_Api.Data;

namespace Web_Api.Migrations
{
    [DbContext(typeof(DataContext))]
    partial class DataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .UseIdentityColumns()
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.1");

            modelBuilder.Entity("Web_Api.Models.CourseModel.Course", b =>
                {
                    b.Property<int>("CourseId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("CourseName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("IsDeleted")
                        .HasColumnType("bit");

                    b.Property<int?>("ProgramTypeId")
                        .HasColumnType("int");

                    b.HasKey("CourseId");

                    b.HasIndex("ProgramTypeId");

                    b.ToTable("Courses");
                });

            modelBuilder.Entity("Web_Api.Models.FunctionModel.Function", b =>
                {
                    b.Property<int>("FunctionId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("FunctionName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("IsDeleted")
                        .HasColumnType("bit");

                    b.HasKey("FunctionId");

                    b.ToTable("Functions");
                });

            modelBuilder.Entity("Web_Api.Models.IndustryModel.Industry", b =>
                {
                    b.Property<int>("IndustryId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("IndustryName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("IsDeleted")
                        .HasColumnType("bit");

                    b.HasKey("IndustryId");

                    b.ToTable("Industries");
                });

            modelBuilder.Entity("Web_Api.Models.ProgramTypeModel.ProgramType", b =>
                {
                    b.Property<int>("ProgramTypeId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<bool>("IsDeleted")
                        .HasColumnType("bit");

                    b.Property<string>("ProgramTypeNames")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("ServiceTypeId")
                        .HasColumnType("int");

                    b.HasKey("ProgramTypeId");

                    b.HasIndex("ServiceTypeId");

                    b.ToTable("ProgramTypes");
                });

            modelBuilder.Entity("Web_Api.Models.ServiceTypeModel.ServiceType", b =>
                {
                    b.Property<int>("ServiceTypeId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<bool>("IsDeleted")
                        .HasColumnType("bit");

                    b.Property<string>("ServiceTypeName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ServiceTypeId");

                    b.ToTable("ServiceTypes");
                });

            modelBuilder.Entity("Web_Api.Models.TopicModel.Topic", b =>
                {
                    b.Property<int>("TopicId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<bool>("IsDeleted")
                        .HasColumnType("bit");

                    b.Property<string>("TopicName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("TopicId");

                    b.ToTable("Topics");
                });

            modelBuilder.Entity("Web_Api.Models.User", b =>
                {
                    b.Property<int>("UserId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Gender")
                        .HasColumnType("int");

                    b.Property<string>("Mobile")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<byte[]>("PasswordHash")
                        .HasColumnType("varbinary(max)");

                    b.Property<byte[]>("PasswordSalt")
                        .HasColumnType("varbinary(max)");

                    b.Property<int>("UserType")
                        .HasColumnType("int");

                    b.Property<string>("Username")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("isDeleted")
                        .HasColumnType("bit");

                    b.HasKey("UserId");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("Web_Api.Models.UserFunctionModel.UserFunction", b =>
                {
                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.Property<int>("FunctionId")
                        .HasColumnType("int");

                    b.HasKey("UserId", "FunctionId");

                    b.HasIndex("FunctionId");

                    b.ToTable("UserFunction");
                });

            modelBuilder.Entity("Web_Api.Models.UserIndustryModel.UserIndustry", b =>
                {
                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.Property<int>("IndustryId")
                        .HasColumnType("int");

                    b.HasKey("UserId", "IndustryId");

                    b.HasIndex("IndustryId");

                    b.ToTable("UserIndustry");
                });

            modelBuilder.Entity("Web_Api.Models.CourseModel.Course", b =>
                {
                    b.HasOne("Web_Api.Models.ProgramTypeModel.ProgramType", "ProgramType")
                        .WithMany("Courses")
                        .HasForeignKey("ProgramTypeId");

                    b.Navigation("ProgramType");
                });

            modelBuilder.Entity("Web_Api.Models.ProgramTypeModel.ProgramType", b =>
                {
                    b.HasOne("Web_Api.Models.ServiceTypeModel.ServiceType", "ServiceType")
                        .WithMany("ProgramTypes")
                        .HasForeignKey("ServiceTypeId");

                    b.Navigation("ServiceType");
                });

            modelBuilder.Entity("Web_Api.Models.UserFunctionModel.UserFunction", b =>
                {
                    b.HasOne("Web_Api.Models.FunctionModel.Function", "Function")
                        .WithMany("UserFunctions")
                        .HasForeignKey("FunctionId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Web_Api.Models.User", "User")
                        .WithMany("UserFunctions")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Function");

                    b.Navigation("User");
                });

            modelBuilder.Entity("Web_Api.Models.UserIndustryModel.UserIndustry", b =>
                {
                    b.HasOne("Web_Api.Models.IndustryModel.Industry", "Industry")
                        .WithMany("UserIndustries")
                        .HasForeignKey("IndustryId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Web_Api.Models.User", "User")
                        .WithMany("UserIndustries")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Industry");

                    b.Navigation("User");
                });

            modelBuilder.Entity("Web_Api.Models.FunctionModel.Function", b =>
                {
                    b.Navigation("UserFunctions");
                });

            modelBuilder.Entity("Web_Api.Models.IndustryModel.Industry", b =>
                {
                    b.Navigation("UserIndustries");
                });

            modelBuilder.Entity("Web_Api.Models.ProgramTypeModel.ProgramType", b =>
                {
                    b.Navigation("Courses");
                });

            modelBuilder.Entity("Web_Api.Models.ServiceTypeModel.ServiceType", b =>
                {
                    b.Navigation("ProgramTypes");
                });

            modelBuilder.Entity("Web_Api.Models.User", b =>
                {
                    b.Navigation("UserFunctions");

                    b.Navigation("UserIndustries");
                });
#pragma warning restore 612, 618
        }
    }
}
