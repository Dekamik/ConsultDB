using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ConsultDB.Api.Consultants.Models
{
    public class ConsultantListItemModel
    {
        public int ConsultantId { get; set; }
        public string FullName { get; set; }
        public bool IsOnAssignment { get; set; }
    }
}
