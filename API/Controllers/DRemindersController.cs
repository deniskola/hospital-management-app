using Persistence;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System.Collections.Generic;
using Domain;
using Microsoft.EntityFrameworkCore;
using System;

namespace API.Controllers
{
    public class DRemindersController : BaseApiController
    {
        private readonly DataContext context;
        public DRemindersController(DataContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<DReminder>>> GetReminders(){
            return await context.DReminders.ToListAsync();
        }

        [HttpGet("{id}")] 
        public async Task<ActionResult<DReminder>> GetReminder(Guid id){ // if we change the id from Guid to int in db we should change the Guid here
            return await context.DReminders.FindAsync(id);
        }
    }
}