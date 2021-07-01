namespace Domain
{
    public class DeathRaport
    {
        public int deathRaportId { get; set; }
        public string deathDate { get; set; }
        public string causeOfDeath { get; set; }
        //  public virtual Doctor Doctor{get;set;}//the death raport is issued by this doctor
        //  public virtual Patient Patient{get;set;}//the dead patient is ....
    }
}