using Persistence;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System.Collections.Generic;
using Domain;
using Microsoft.EntityFrameworkCore;
using System;
using MediatR;
using Application.Prescriptions;
using System.Threading;
using Microsoft.AspNetCore.Authorization;

namespace API.Controllers
{
    [AllowAnonymous]
    public class PrescriptionsController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Prescription>>> GetPrescriptions()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Prescription>> GetPrescriptions(int id)
        {
            return await Mediator.Send(new Details.Query { Id = id });
        }

        [HttpPost]
        public async Task<IActionResult> CreatePrescriptions(Prescription prescriptions)
        {
            return Ok(await Mediator.Send(new Create.Command { Prescription = prescriptions }));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditPrescription(int id, Prescription prescription)
        {
            prescription.Id = id;
            return Ok(await Mediator.Send(new Edit.Command { Prescription = prescription }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePrescription(int id)
        {
            return Ok(await Mediator.Send(new Delete.Command { Id = id }));
        }
    }
}