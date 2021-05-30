using Persistence;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System.Collections.Generic;
using Domain;
using Microsoft.EntityFrameworkCore;
using System;
using MediatR;
using Application.DReminders;
using System.Threading;

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
        public async Task<ActionResult<DReminder>> GetReminder(Guid id)
        { // if we change the id from Guid to int in db we should change the Guid here
            return await Mediator.Send(new Details.Query{Id = id});
        }

        [HttpPost]
        public async Task<IActionResult> CreateReminder(DReminder dReminder)
        {
            return Ok(await Mediator.Send(new Create.Command{DReminder=dReminder}));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditReminder(Guid id, DReminder dReminder)
        {
            dReminder.Id=id;
            return Ok(await Mediator.Send(new Edit.Command{DReminder=dReminder}));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteActivity(Guid id){
            
            return Ok(await Mediator.Send(new Delete.Command{Id = id}));
        }
    }
}