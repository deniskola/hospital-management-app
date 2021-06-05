using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System.Collections.Generic;
using Domain;
using System;
using Application.Abouts;

namespace API.Controllers
{
    public class AboutController : BaseApiController
    {


        [HttpGet]
        public async Task<ActionResult<List<About>>> GetAbout()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<About>> GetAbout(Guid id)
        {
            return await Mediator.Send(new Details.Query { Id = id });
        }

        [HttpPost]
        public async Task<IActionResult> CreateAbout(About about)
        {
            return Ok(await Mediator.Send(new Create.Command { About = about }));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditAbout(Guid id, About about)
        {
            about.Id = id;
            return Ok(await Mediator.Send(new Edit.Command { About = about }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAbout(Guid id)
        {
            return Ok(await Mediator.Send(new Delete.Command { Id = id }));
        }

    }
}