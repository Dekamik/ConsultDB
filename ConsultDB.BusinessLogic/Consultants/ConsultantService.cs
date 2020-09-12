using ConsultDB.Core;
using ConsultDB.Core.Entities;
using Microsoft.EntityFrameworkCore;
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
            return _dbContext.Consultants
                .Include(nameof(Consultant.ConsultantImage))
                .SingleAsync(c => c.ConsultantId == id);
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
                .Include(nameof(Consultant.ConsultantImage))
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
                existingConsultant.Skills = consultant.Skills;

                // Update or add only if new image exists 
                // and (existing consultant has no image or existing and new consultant images don't share name)
                if (consultant.ConsultantImage != null
                    && (existingConsultant.ConsultantImageId == null || existingConsultant.ConsultantImage.Name != consultant.ConsultantImage.Name))
                {
                    if (existingConsultant.ConsultantImageId != null)
                    {
                        _dbContext.ConsultantImages.Remove(existingConsultant.ConsultantImage);
                    }

                    existingConsultant.ConsultantImage = new ConsultantImage
                    {
                        Data = consultant.ConsultantImage.Data,
                        Name = consultant.ConsultantImage.Name
                    };
                }
                
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
