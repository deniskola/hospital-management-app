using Persistence;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System.Collections.Generic;
using Domain;
using Microsoft.EntityFrameworkCore;
using System;
using MediatR;
using Application.WorkingHours;
using System.Threading;
using Microsoft.AspNetCore.Authorization;

namespace API.Controllers
{
    [AllowAnonymous]
    public class WorkingHoursController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<WorkingHour>>> GetWorkingHours()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<WorkingHour>> GetWorkingHours(int id)
        {
            return await Mediator.Send(new Details.Query { Id = id });
        }

        [HttpPost]
        public async Task<IActionResult> CreateWorkingHours(WorkingHour workinghours)
        {
            return Ok(await Mediator.Send(new Create.Command { WorkingHour = workinghours }));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditWorkingHours(int id, WorkingHour workinghour)
        {
            workinghour.Id = id;
            return Ok(await Mediator.Send(new Edit.Command { WorkingHour = workinghour }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteWorkingHours(int id)
        {
            return Ok(await Mediator.Send(new Delete.Command { Id = id }));
        }
    }
}