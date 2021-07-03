using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System.Collections.Generic;
using Domain;
using System;
using Application.LabTests;
using Microsoft.AspNetCore.Authorization;

namespace API.Controllers
{
  [AllowAnonymous]
    public class LabTestsController : BaseApiController
    {
        public async Task<ActionResult<List<LabTest>>> GetLabTests()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{Id}")]
        public async Task<ActionResult<LabTest>> GetLabTest(Guid id)
        {
            return await Mediator.Send(new Details.Query { Id = id });
        }

        [HttpPost]
        public async Task<IActionResult> CreateLabTest(LabTest labtest)
        {
            return Ok(await Mediator.Send(new Create.Command { LabTest = labtest }));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditLabTest(Guid id, LabTest labtest)
        {
            labtest.Id = id;
            return Ok(await Mediator.Send(new Edit.Command { LabTest = labtest }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLabTest(Guid id)
        {
            return Ok(await Mediator.Send(new Delete.Command { Id = id }));
        }
    }
}