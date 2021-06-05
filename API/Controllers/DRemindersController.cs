using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System.Collections.Generic;
using Domain;
using System;
using Application.DReminders;


namespace API.Controllers
{
    public class DRemindersController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<DReminder>>> GetReminders()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<DReminder>> GetReminder(int id)
        { // if we change the id from Guid to int in db we should change the Guid here
            return await Mediator.Send(new Details.Query{id = id});
        }

        [HttpPost]
        public async Task<IActionResult> CreateReminder(DReminder dReminder)
        {
            return Ok(await Mediator.Send(new Create.Command{DReminder=dReminder}));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditReminder(int id, DReminder dReminder)
        {
            dReminder.id=id;
            return Ok(await Mediator.Send(new Edit.Command{DReminder=dReminder}));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteActivity(int id){
            
            return Ok(await Mediator.Send(new Delete.Command{id = id}));
        }
    }
}