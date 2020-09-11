using ConsultDB.Core;
using ConsultDB.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;

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

        public Consultant GetConsultant(int id)
        {
            return _dbContext.Consultants.Single(c => c.ConsultantId == id);
        }
    }
}
