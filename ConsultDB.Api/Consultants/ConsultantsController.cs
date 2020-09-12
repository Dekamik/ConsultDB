using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using ConsultDB.Api.Consultants.Models;
using ConsultDB.Api.Helpers;
using ConsultDB.BusinessLogic.Consultants;
using ConsultDB.Core.Entities;
using Microsoft.AspNetCore.Http;
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
            ConsultantModel model = CreateConsultantModel(consultant);

            return Ok(model);
        }

        [HttpPost]
        [Route("new")]
        public async Task<IActionResult> NewConsultant([FromForm] ConsultantModel model)
        {
            Consultant consultant = await CreateConsultantAsync(model);
            Consultant dbConsultant = await _consultantService.CreateConsultant(consultant);
            ConsultantModel newModel = CreateConsultantModel(dbConsultant);
            return Ok(newModel);
        }

        [HttpPost]
        public async Task<IActionResult> UpdateConsultant([FromForm] ConsultantModel model)
        {
            Consultant consultant = await CreateConsultantAsync(model);
            await _consultantService.UpdateConsultant(consultant);
            return Ok(model);
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> DeleteConsultant(int id)
        {
            await _consultantService.DeleteConsultant(id);
            return Ok();
        }

        private async Task<Consultant> CreateConsultantAsync(ConsultantModel model)
        {
            IFormFile formFile = Request.Form.Files.FirstOrDefault();
            var consultant = new Consultant
            {
                Name = model.FullName,
                DateOfBirth = DateTime.Parse(model.DateOfBirth),
                EmailAddress = model.EmailAddress,
                StreetAddress = model.StreetAddress,
                ZipCode = int.Parse(model.ZipCode),
                City = model.City,
                IsOnAssignment = model.IsOnAssignment,
                Skills = model.Skills,
            };

            if (model.ConsultantId.HasValue)
            {
                consultant.ConsultantId = model.ConsultantId.Value;
            }

            if (formFile != null)
            {
                consultant.ConsultantImage = new ConsultantImage
                {
                    Data = await formFile.GetBufferAsync(),
                    Name = formFile.Name
                };
            }

            return consultant;
        }

        private ConsultantModel CreateConsultantModel(Consultant consultant)
        {
            var model = new ConsultantModel
            {
                ConsultantId = consultant.ConsultantId,
                FullName = consultant.Name,
                DateOfBirth = consultant.DateOfBirth.ToString("yyyy-MM-dd"),
                EmailAddress = consultant.EmailAddress,
                StreetAddress = consultant.StreetAddress,
                ZipCode = consultant.ZipCode.ToString(),
                City = consultant.City,
                IsOnAssignment = consultant.IsOnAssignment,
                Skills = consultant.Skills
            };
            if (consultant.ConsultantImage != null)
            {
                model.ProfileImage = Convert.ToBase64String(consultant.ConsultantImage.Data);
            }
            return model;
        }
    }
}