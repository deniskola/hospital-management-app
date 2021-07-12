using System.ComponentModel.DataAnnotations.Schema;
using System;

namespace Domain{
    public class BirthRaport
    {
        public int id { get; set; }
        public string childName { get; set; }
        public string gender { get; set; }
        public double weight { get; set; }
        [Column(TypeName="Date")]
        public DateTime birthDate { get; set; }
        public string fatherName { get; set; }
        //Navigation Properties
        public string PatientId { get; set; }
        public Patient Patients{get;set;}

    }
}