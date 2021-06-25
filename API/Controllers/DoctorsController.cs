using Microsoft.AspNetCore.Mvc;
using Domain;
using System.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;
using Persistence;

namespace API.Controllers
{
    [AllowAnonymous]
    [ApiController]
    [Route("api/[controller]")]
    public class DoctorsController:ControllerBase
    {
        private readonly DataContext _context;

        public DoctorsController(DataContext context){
            _context=context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Doctor>>> GetDoctors(){
            return await _context.Doctors.ToListAsync();
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Doctor>> GetDoctor(string id){
            var doctor= await _context.Doctors.FindAsync(id);
            if(doctor==null){
                return NotFound();
            }

            return doctor;
        }
        [HttpPost]
        public async Task<ActionResult<Doctor>> PostDoctor(Doctor doctor){
            _context.Doctors.Add(doctor);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDoctor",new {id=doctor.Id},doctor);
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDoctor(string id, Doctor doctor){
            doctor.Id=id;

            _context.Entry(doctor).State=EntityState.Modified;

            try{
                await _context.SaveChangesAsync();
            }catch(DbUpdateConcurrencyException){
                if(!DoctorExists(id)){
                    return NotFound();
                }else{
                    throw;
                }
            }

            return NoContent();
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult<Doctor>> DeleteDoctor(string id){
            var doctor=await _context.Doctors.FindAsync(id);
            if(doctor==null){
                return NotFound();
            }

            _context.Doctors.Remove(doctor);
            await _context.SaveChangesAsync();

            return doctor;
        }
        private bool DoctorExists(string id){
            return _context.Doctors.Any(e=>e.Id==id);
        }

    }
}
