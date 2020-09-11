using ConsultDB.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ConsultDB.BusinessLogic.Consultants
{
    public interface IConsultantService
    {
        IQueryable<Consultant> GetAll();

        Consultant GetConsultant(int id);
    }
}
