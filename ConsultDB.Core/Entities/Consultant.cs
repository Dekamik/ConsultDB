using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ConsultDB.Core.Entities
{
    public class Consultant
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ConsultantId { get; set; }

        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }

        [Required]
        public DateTime DateOfBirth { get; set; }

        [Required]
        public string EmailAddress { get; set; }

        public string StreetAddress { get; set; }

        public int ZipCode { get; set; }

        public string City { get; set; }

        public bool IsOnAssignment { get; set; }
    }
}
