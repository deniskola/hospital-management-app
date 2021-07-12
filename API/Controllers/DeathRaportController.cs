using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System.Collections.Generic;
using Domain;
using System;
using Microsoft.AspNetCore.Authorization;
using Persistence;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace API.Controllers
{
    [AllowAnonymous]
    public class DeathRaportController:BaseApiController
    {
        private readonly DataContext _context;

        public DeathRaportController(DataContext context){
            _context=context;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DeathRaport>>> GetDeathRaport()
        {
            return await _context.DeathRaports.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<DeathRaport>> GetDeathRaportId(int id)
        {
            var deathRaport= await _context.DeathRaports.FindAsync(id);
            if(deathRaport==null){
                return NotFound();
            }

            return deathRaport;
        }

        [HttpPost]
        public async Task<IActionResult> CreateDeathRaport(DeathRaport deathRaport)
        {
            _context.DeathRaports.Add(deathRaport);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDeathRaport",new{id=deathRaport.id},deathRaport);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditDeathRaport(int id, DeathRaport deathRaport)
        {
            deathRaport.id = id;
            
            _context.Entry(deathRaport).State=EntityState.Modified;
            try{
                await _context.SaveChangesAsync();
            }catch(DbUpdateConcurrencyException){
                if(!DeathRaportExists(id)){
                    return NotFound();
                }else{
                    throw;
                }
            }
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<DeathRaport>> DeleteDeathRaport(int id)
        {
            var deathRaport=await _context.DeathRaports.FindAsync(id);
            if(deathRaport==null){
                return NotFound();
            }

            _context.DeathRaports.Remove(deathRaport);
            await _context.SaveChangesAsync();

            return deathRaport;
        }
        
        private bool DeathRaportExists(int id){
            return _context.DeathRaports.Any(e=>e.id==id);
        }
    }
}