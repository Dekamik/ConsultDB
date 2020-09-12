using ConsultDB.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsultDB.BusinessLogic.Consultants
{
    public interface IConsultantService
    {
        IQueryable<Consultant> GetAll();

        Task<Consultant> GetConsultant(int id);

        Task<Consultant> CreateConsultant(Consultant consultant);

        Task UpdateConsultant(Consultant consultant);

        Task DeleteConsultant(int id);
    }
}
