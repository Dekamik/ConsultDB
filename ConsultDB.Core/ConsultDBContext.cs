using ConsultDB.Core.Entities;
using Microsoft.EntityFrameworkCore;

namespace ConsultDB.Core
{
    public class ConsultDBContext : DbContext
    {
        public ConsultDBContext(DbContextOptions options) : base(options)
        {
        }

        public virtual DbSet<Consultant> Consultants { get; set; }
    }
}
