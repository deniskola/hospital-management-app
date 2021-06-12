using Persistence;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System.Collections.Generic;
using Domain;
using Microsoft.EntityFrameworkCore;
using System;
using MediatR;
using Application.AddAppointments;
using System.Threading;
using Microsoft.AspNetCore.Authorization;

namespace API.Controllers
{
    [AllowAnonymous]
    public class AppointmentsController : BaseApiController
    {


        [HttpGet]
        public async Task<ActionResult<List<AddAppointment>>> GetAppointments()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<AddAppointment>> GetAppointments(int id)
        {
            return await Mediator.Send(new Details.Query { Id = id });
        }

        [HttpPost]
        public async Task<IActionResult> CreateAppointment(AddAppointment appointments)
        {
            return Ok(await Mediator.Send(new Create.Command { AddAppointment = appointments }));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditAppointment(int id, AddAppointment appointment)
        {
            appointment.Id = id;
            return Ok(await Mediator.Send(new Edit.Command { AddAppointment = appointment }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteActivity(int id)
        {
            return Ok(await Mediator.Send(new Delete.Command { Id = id }));
        }
    }
}