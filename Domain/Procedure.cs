using System;

namespace Domain
{
    public class Procedure
    {
         public Guid Id{ get;set; }
         public string Name {get; set; }
         public DateTime Date { get; set; }

         public string LocationOnBody {get; set;}
    }
}