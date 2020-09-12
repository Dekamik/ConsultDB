using ConsultDB.Core;
using ConsultDB.Core.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ConsultDB.BusinessLogic.Consultants
{
    public class ConsultantService : IConsultantService
    {
        private readonly ConsultDBContext _dbContext;

        public ConsultantService(ConsultDBContext dbContext) 
        {
            _dbContext = dbContext;
        }

        public IQueryable<Consultant> GetAll() => _dbContext.Consultants;

        public Task<Consultant> GetConsultant(int id)
        {
            return _dbContext.Consultants.SingleAsync(c => c.ConsultantId == id);
        }

        public async Task<Consultant> CreateConsultant(Consultant consultant)
        {
            _dbContext.Add(consultant);
            await _dbContext.SaveChangesAsync();
            return consultant;
        }

        public async Task UpdateConsultant(Consultant consultant)
        {
            Consultant existingConsultant = await GetAll()
                .SingleOrDefaultAsync(c => c.ConsultantId == consultant.ConsultantId);
            if (existingConsultant != null)
            {
                // TODO: Create extension method for updating objects through reflection
                existingConsultant.Name = consultant.Name;
                existingConsultant.DateOfBirth = consultant.DateOfBirth;
                existingConsultant.EmailAddress = consultant.EmailAddress;
                existingConsultant.StreetAddress = consultant.StreetAddress;
                existingConsultant.ZipCode = consultant.ZipCode;
                existingConsultant.City = consultant.City;
                existingConsultant.IsOnAssignment = consultant.IsOnAssignment;

                _dbContext.SaveChanges();
            }
        }

        public async Task DeleteConsultant(int id)
        {
            Consultant existingConsultant = await GetAll()
                .SingleOrDefaultAsync(c => c.ConsultantId == id);
            if (existingConsultant != null)
            {
                _dbContext.Consultants.Remove(existingConsultant);
                _dbContext.SaveChanges();
            }
        }
    }
}
