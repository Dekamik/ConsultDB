using System;
using System.Linq;
using System.Threading.Tasks;
using ConsultDB.Api.Consultants.Models;
using ConsultDB.BusinessLogic.Consultants;
using ConsultDB.Core.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace ConsultDB.Api.Consultants
{
    [Route("api/[controller]")]
    [ApiController]
    public class ConsultantsController : ControllerBase
    {
        private readonly ILogger<ConsultantsController> _logger;
        private readonly IConsultantService _consultantService;

        public ConsultantsController(
            ILogger<ConsultantsController> logger,
            IConsultantService consultantService)
        {
            _logger = logger;
            _consultantService = consultantService;
        }

        [HttpGet]
        [Route("list")]
        public IActionResult GetList()
        {
            var model = _consultantService
                .GetAll()
                .Select(c => new ConsultantListItemModel
                {
                    ConsultantId = c.ConsultantId,
                    FullName = c.Name,
                    IsOnAssignment = c.IsOnAssignment
                });

            return Ok(model);
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> GetConsultantById(int id)
        {
            Consultant consultant = await _consultantService.GetConsultant(id);
            var model = new ConsultantModel
            {
                ConsultantId = consultant.ConsultantId,
                FullName = consultant.Name,
                DateOfBirth = consultant.DateOfBirth.ToString("yyyy-MM-dd"),
                EmailAddress = consultant.EmailAddress,
                StreetAddress = consultant.StreetAddress,
                ZipCode = consultant.ZipCode.ToString(),
                City = consultant.City,
                IsOnAssignment = consultant.IsOnAssignment
            };

            return Ok(model);
        }

        [HttpPost]
        public async Task<IActionResult> SaveConsultant([FromForm] ConsultantModel model)
        {
            Consultant consultant = CreateConsultant(model);
            await _consultantService.SaveConsultant(consultant);
            return Ok();
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> DeleteConsultant(int id)
        {
            await _consultantService.DeleteConsultant(id);
            return Ok();
        }

        private Consultant CreateConsultant(ConsultantModel model)
        {
            return new Consultant
            {
                ConsultantId = model.ConsultantId,
                Name = model.FullName,
                DateOfBirth = DateTime.Parse(model.DateOfBirth),
                EmailAddress = model.EmailAddress,
                StreetAddress = model.StreetAddress,
                ZipCode = int.Parse(model.ZipCode),
                City = model.City,
                IsOnAssignment = model.IsOnAssignment
            };
        }
    }
}