using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System.Collections.Generic;
using Domain;
using System;
using Application.BodyInfos;
using Microsoft.AspNetCore.Authorization;
namespace API.Controllers
{
    [AllowAnonymous]
    public class BodyInfosController : BaseApiController
    {
        public async Task<ActionResult<List<BodyInfo>>> GetBodyInfos()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{Id}")]
        public async Task<ActionResult<BodyInfo>> GetBodyInfo(Guid id)
        {
            return await Mediator.Send(new Details.Query { Id = id });
        }

        [HttpPost]
        public async Task<IActionResult> CreateBodyInfo(BodyInfo bodyinfo)
        {
            return Ok(await Mediator.Send(new Create.Command { BodyInfo = bodyinfo }));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditBodyInfo(Guid id, BodyInfo bodyinfo)
        {
            bodyinfo.Id = id;
            return Ok(await Mediator.Send(new Edit.Command { BodyInfo = bodyinfo }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBodyInfo(Guid id)
        {
            return Ok(await Mediator.Send(new Delete.Command { Id = id }));
        }
    }
}