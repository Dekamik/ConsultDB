using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace ConsultDB.Core
{
    public class ConsultDBContextFactory : IDesignTimeDbContextFactory<ConsultDBContext>
    {
        public ConsultDBContext CreateDbContext(string[] args)
        {
            var configuration = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json")
                .Build();

            var optionsBuilder = new DbContextOptionsBuilder();

            optionsBuilder.UseSqlServer(configuration["ConnectionString:ConsultDB"]);

            return new ConsultDBContext(optionsBuilder.Options);
        }
    }
}
