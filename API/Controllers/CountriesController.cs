using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System.Collections.Generic;
using Domain;
using System;
using Application.Countries;
using Microsoft.AspNetCore.Authorization;

namespace API.Controllers
{

    public class CountriesController : BaseApiController
    {


        [HttpGet]
        public async Task<ActionResult<List<Country>>> GetCountries()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Country>> GetCountry(Guid id)
        {
            return await Mediator.Send(new Details.Query { Id = id });
        }

        [HttpPost]
        public async Task<IActionResult> CreateCountry(Country country)
        {
            return Ok(await Mediator.Send(new Create.Command { Country = country }));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditCountry(Guid id, Country country)
        {
            country.Id = id;
            return Ok(await Mediator.Send(new Edit.Command { Country = country }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCountry(Guid id)
        {
            return Ok(await Mediator.Send(new Delete.Command { Id = id }));
        }

    }
}