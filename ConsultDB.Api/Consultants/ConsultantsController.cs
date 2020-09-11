using System;
using System.Linq;
using ConsultDB.Api.Consultants.Models;
using ConsultDB.BusinessLogic.Consultants;
using ConsultDB.BusinessLogic.Helpers;
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
        public IActionResult GetConsultantById(int id)
        {
            Consultant consultant = _consultantService.GetConsultant(id);
            var model = new ConsultantViewModel
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
    }
}