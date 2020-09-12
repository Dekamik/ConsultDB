﻿// <auto-generated />
using System;
using ConsultDB.Core;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace ConsultDB.Core.Migrations
{
    [DbContext(typeof(ConsultDBContext))]
    [Migration("20200912133721_ConsultantImages")]
    partial class ConsultantImages
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.8")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("ConsultDB.Core.Entities.Consultant", b =>
                {
                    b.Property<int>("ConsultantId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("City")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("ConsultantImageId")
                        .HasColumnType("int");

                    b.Property<DateTime>("DateOfBirth")
                        .HasColumnType("datetime2");

                    b.Property<string>("EmailAddress")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("IsOnAssignment")
                        .HasColumnType("bit");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Skills")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("StreetAddress")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("ZipCode")
                        .HasColumnType("int");

                    b.HasKey("ConsultantId");

                    b.ToTable("Consultants");
                });

            modelBuilder.Entity("ConsultDB.Core.Entities.ConsultantImage", b =>
                {
                    b.Property<int>("ConsultantImageId")
                        .HasColumnType("int");

                    b.Property<byte[]>("Data")
                        .HasColumnType("varbinary(max)");

                    b.HasKey("ConsultantImageId");

                    b.ToTable("ConsultantImages");
                });

            modelBuilder.Entity("ConsultDB.Core.Entities.ConsultantImage", b =>
                {
                    b.HasOne("ConsultDB.Core.Entities.Consultant", "Consultant")
                        .WithOne("ConsultantImage")
                        .HasForeignKey("ConsultDB.Core.Entities.ConsultantImage", "ConsultantImageId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}
