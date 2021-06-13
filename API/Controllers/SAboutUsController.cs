using System.Collections.Generic;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Mvc;
using System;
using Application.Services;
using System.Threading;
using Microsoft.AspNetCore.Authorization;

namespace API.Controllers
{
    public class SAboutUsController : BaseApiController
    {

        [HttpGet]
        public async Task<ActionResult<List<AboutUs>>> GetSAboutUs()
        {
            return await Mediator.Send(new List.Query());
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<AboutUs>> GetSAboutUs(Guid id)
        {
            return await Mediator.Send(new Details.Query { Id = id });
        }

        [HttpPost]
        public async Task<IActionResult> CreateAboutUs(AboutUs SAboutUs)
        {
            return Ok(await Mediator.Send(new Create.Command { AboutUs = SAboutUs }));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditAboutUs(Guid id, AboutUs aboutus)
        {
            aboutus.Id = id;
            return Ok(await Mediator.Send(new Edit.Command { AboutUs = aboutus }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAboutUs(Guid id)
        {
            return Ok(await Mediator.Send(new Delete.Command { Id = id }));
        }
    }
}