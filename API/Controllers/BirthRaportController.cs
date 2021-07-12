using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System.Collections.Generic;
using Domain;
using System;
using Microsoft.AspNetCore.Authorization;
using MediatR;
using Persistence;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace API.Controllers
{
    [AllowAnonymous]
    public class BirthRaportController : BaseApiController
    {
        private readonly DataContext _context;
        
        public BirthRaportController(DataContext context){
            _context=context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<BirthRaport>>> GetBirthRaport()
        {
            return await _context.BirthRaports.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<BirthRaport>> GetBirthRap(int id)
        { 
            var birthRaport=await _context.BirthRaports.FindAsync(id);
            if(birthRaport==null){
                return NotFound();
            }

            return birthRaport;
        }

        [HttpPost]
        public async Task<IActionResult> CreateBirthRaport(BirthRaport birthRaport)
        {
            _context.BirthRaports.Add(birthRaport);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBirthRaport",new{id=birthRaport.id},birthRaport);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditBirthRaport(int id, BirthRaport birthRaport)
        {
            birthRaport.id = id;
            
            _context.Entry(birthRaport).State=EntityState.Modified;

            try{
                await _context.SaveChangesAsync();
            }catch(DbUpdateConcurrencyException){
                if(birthRaportExists(id)){
                    return NotFound();
                }else{
                    throw;
                }
            }
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<BirthRaport>> DeleteBirthRaport(int id)
        {
            var birthRaport=await _context.BirthRaports.FindAsync(id);
            if(birthRaport==null){
                return NotFound();
            }

            _context.BirthRaports.Remove(birthRaport);
            await _context.SaveChangesAsync();

            return birthRaport;
        }
        private bool birthRaportExists(int id){
            return _context.BirthRaports.Any(e=>e.id==id);
        }
    }
}