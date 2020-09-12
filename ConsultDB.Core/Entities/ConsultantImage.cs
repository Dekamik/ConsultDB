using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace ConsultDB.Core.Entities
{
    public class ConsultantImage
    {
        [ForeignKey(nameof(Entities.Consultant))]
        public int ConsultantImageId { get; set; }

        public byte[] Data { get; set; }

        public virtual Consultant Consultant { get; set; }
    }
}
