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
    public class DRemindersController : BaseApiController
    {
        private readonly DataContext _context;

        public DRemindersController(DataContext context){
            _context=context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<DReminder>>> GetReminders()
        {
            return await _context.DReminders.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<DReminder>> GetReminder(int id)
        {
            var reminder=await _context.DReminders.FindAsync(id);
            if(reminder==null){
                return NotFound();
            }

            return reminder;
        }

        [HttpPost]
        public async Task<IActionResult> CreateReminder(DReminder dReminder)
        {   
            _context.DReminders.Add(dReminder);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetReminders",new{id=dReminder.id},dReminder);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditReminder(int id, DReminder dReminder)
        {
            dReminder.id = id;
            
            _context.Entry(dReminder).State=EntityState.Modified;

            try{
                await _context.SaveChangesAsync();
            }catch(DbUpdateConcurrencyException){
                if(!reminderExists(id)){
                    return NotFound();
                }else{
                    throw;
                }
            }
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<DReminder>> DeleteActivity(int id)
        {
            var reminder=await _context.DReminders.FindAsync(id);
            if(reminder==null){
                return NotFound();
            }

            _context.DReminders.Remove(reminder);
            await _context.SaveChangesAsync();

            return reminder;
        }

        private bool reminderExists(int id){
            return _context.DReminders.Any(e=>e.id==id);
        }
    }
}