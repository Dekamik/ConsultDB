using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ConsultDB.Api.Consultants.Models
{
    public class ConsultantViewModel
    {
        public int ConsultantId { get; set; }

        public string FullName { get; set; }

        public int Age { get; set; }

        public string EmailAddress { get; set; }

        public string HomeAddress { get; set; }

        public string Skills { get; set; }

        public bool IsOnAssignment { get; set; }
    }
}
