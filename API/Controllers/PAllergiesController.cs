using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System.Collections.Generic;
using Domain;
using System;
using Application.PAllergy;
using Microsoft.AspNetCore.Authorization;

namespace API.Controllers
{
    [AllowAnonymous]
    public class PAllergiesController : BaseApiController
    {

        [HttpGet]
        public async Task<ActionResult<List<PAllergies>>> GetAllergies()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{Id}")]
        public async Task<ActionResult<PAllergies>> GetAllergy(Guid id)
        {
            return await Mediator.Send(new Details.Query { Id = id });
        }

        [HttpPost]
        public async Task<IActionResult> CreateAllergy(PAllergies pAllergies)
        {
            return Ok(await Mediator.Send(new Create.Command { PAllergies = pAllergies }));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditAllergy(Guid id, PAllergies pAllergies)
        {
            pAllergies.Id = id;
            return Ok(await Mediator.Send(new Edit.Command { PAllergies = pAllergies }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAllergy(Guid id)
        {
            return Ok(await Mediator.Send(new Delete.Command { Id = id }));
        }
    }
}