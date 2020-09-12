using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ConsultDB.Api.Consultants.Models
{
    public class ConsultantModel
    {
        public int? ConsultantId { get; set; }

        public string FullName { get; set; }

        public string DateOfBirth { get; set; }

        public string EmailAddress { get; set; }

        public string StreetAddress { get; set; }

        public string ZipCode { get; set; }

        public string City { get; set; }

        public string Skills { get; set; } // TODO: Create a list of skills, for easy editing and comparison

        public bool IsOnAssignment { get; set; }
    }
}
