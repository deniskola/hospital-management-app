using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System.Collections.Generic;
using Domain;
using System;
using Application.Procedures;
using Microsoft.AspNetCore.Authorization;
namespace API.Controllers
{
    [AllowAnonymous]
    public class ProceduresController : BaseApiController
    {
        public async Task<ActionResult<List<Procedure>>> GetProcedures()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{Id}")]
        public async Task<ActionResult<Procedure>> GetProcedure(Guid id)
        {
            return await Mediator.Send(new Details.Query { Id = id });
        }

        [HttpPost]
        public async Task<IActionResult> CreateProcedure(Procedure procedure)
        {
            return Ok(await Mediator.Send(new Create.Command { Procedure = procedure }));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditProcedure(Guid id, Procedure procedure)
        {
            procedure.Id = id;
            return Ok(await Mediator.Send(new Edit.Command { Procedure = procedure }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProcedure(Guid id)
        {
            return Ok(await Mediator.Send(new Delete.Command { Id = id }));
        }
    }
}