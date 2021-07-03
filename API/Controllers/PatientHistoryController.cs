using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System.Collections.Generic;
using Domain;
using System;
using Application.PatientHistories;
using Microsoft.AspNetCore.Authorization;
namespace API.Controllers
{
    [AllowAnonymous]
    public class PatientHistoryController  : BaseApiController
    {
        public async Task<ActionResult<List<PatientHistory>>> GetPatientHistories()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{Id}")]
        public async Task<ActionResult<PatientHistory>> GetPatientHistory(Guid id)
        {
            return await Mediator.Send(new Details.Query { Id = id });
        }

        [HttpPost]
        public async Task<IActionResult> CreatePatientHistory(PatientHistory patientHistory)
        {
            return Ok(await Mediator.Send(new Create.Command { PatientHistory = patientHistory }));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditPatientHistory(Guid id, PatientHistory patientHistory)
        {
            patientHistory.Id = id;
            return Ok(await Mediator.Send(new Edit.Command { PatientHistory = patientHistory }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePatientHistory(Guid id)
        {
            return Ok(await Mediator.Send(new Delete.Command { Id = id }));
        }

        
    }
}