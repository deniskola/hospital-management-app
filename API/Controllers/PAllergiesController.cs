using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System.Collections.Generic;
using Domain;
using System;
using Application.ProfileA;
using Microsoft.AspNetCore.Authorization;

namespace API.Controllers
{
    [AllowAnonymous]
    public class PAllergiesController : BaseApiController
    {

        [HttpGet]
        public async Task<ActionResult<List<PAllergies>>> GetAllergies()
        {
            return await Mediator.Send(new ListAllergies.Query());
        }

        [HttpGet("{Id}")]
        public async Task<ActionResult<PAllergies>> GetAllergies(Guid id)
        {
            return await Mediator.Send(new DetailsA.Query { Id = id });
        }

        [HttpPost]
        public async Task<IActionResult> CreateAllergies(PAllergies pAllergies)
        {
            return Ok(await Mediator.Send(new CreateAllergies.Command { PAllergies = pAllergies }));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditAllergies(Guid id, PAllergies pAllergies)
        {
            pAllergies.Id = id;
            return Ok(await Mediator.Send(new EditAllergies.Command { PAllergies = pAllergies }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAllergies(Guid id)
        {
            return Ok(await Mediator.Send(new DeleteAllergies.Command { Id = id }));
        }
    }
}