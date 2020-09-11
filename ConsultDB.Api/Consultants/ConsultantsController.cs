using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ConsultDB.Api.Consultants.Models;
using ConsultDB.BusinessLogic.Consultants;
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

        public ConsultantsController(ILogger<ConsultantsController> logger,
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
                    FullName = $"{c.FirstName} {c.LastName}",
                    IsOnAssignment = c.IsOnAssignment
                });

            return Ok(model);
        }
    }
}