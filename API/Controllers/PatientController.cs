using Microsoft.AspNetCore.Mvc;
using Domain;
using System.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;
using Persistence;
using AutoMapper;

namespace API.Controllers
{
    [AllowAnonymous]
    [ApiController]
    [Route("api/[controller]")]
    public class PatientController:ControllerBase
    {
        private readonly DataContext _context;
        //private readonly IMapper _mapper;
        public PatientController(DataContext context//,IMapper mapper
        ){
            _context=context;
           // _mapper=mapper;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Patient>>> GetPatients(){
            return await _context.Patients.ToListAsync();
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Patient>> GetPatient(string id){
            var patient=await _context.Patients.FindAsync(id);
            if(patient==null){
                return NotFound();
            }

            return patient;
        }
        /*
        [HttpGet("getPatientById/{id}")]
        public async Task<ActionResult<Patient>> getPatientById(string id){
            /*
            var _response=_context.Patients.Include(p=>p.BirthRaports)
                                            .Where(p=>p.Id==id)
                                            .FirstOrDefault();

            if(_response ==null){
                return NotFound();
            }
            var _response=await _context.Patients.SingleAsync(patient=>patient.Id==id);

            _context.Entry(_response)
                    .Collection(b=>b.BirthRaports)
                    .Query()
                    .Load();
            if(_response==null){
                return NotFound();
            }
            
            return  _response;
        }
        */
        
        [HttpPost]
        public async Task<ActionResult<Patient>> PostPatients(Patient patient){
            _context.Patients.Add(patient);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPatients",new {id=patient.Id}, patient);
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPatient(string id,Patient patient){
            
            patient.Id=id;
            _context.Entry(patient).State=EntityState.Modified;
            try{
                await _context.SaveChangesAsync();
            }catch(DbUpdateConcurrencyException){
                if(!PatientExists(id)){
                    return NotFound();
                }else{
                    throw;
                }
            }
            return NoContent();
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult<Patient>> DeletePatient(string id){
            var patient=await _context.Patients.FindAsync(id);
            if(patient==null){
                return NotFound();
            }

            _context.Patients.Remove(patient);
            await _context.SaveChangesAsync();

            return patient;
        }
        private bool PatientExists(string id){
            return _context.Patients.Any(e=>e.Id.Equals(id));
        }
    }
}