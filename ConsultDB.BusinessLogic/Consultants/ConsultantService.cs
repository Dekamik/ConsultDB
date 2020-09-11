using ConsultDB.BusinessLogic.Consultants;
using ConsultDB.Core;
using ConsultDB.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ConsultDB.BusinessLogic
{
    public class ConsultantService : IConsultantService
    {
        private readonly ConsultDBContext _dbContext;

        public ConsultantService(ConsultDBContext dbContext) 
        {
            _dbContext = dbContext;
        }

        public IQueryable<Consultant> GetAll() => _dbContext.Consultants;
    }
}
