using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System.Collections.Generic;
using Domain;
using System;
using Application.Users;
using Microsoft.AspNetCore.Authorization;

namespace API.Controllers
{
    [AllowAnonymous]
    public class UserController : BaseApiController
    {


        [HttpGet]
        public async Task<ActionResult<List<AppUser>>> GetUsers()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<AppUser>> GetUser(string id)
        {
            return await Mediator.Send(new Details.Query { Id = id });
        }

        [HttpPost]
        public async Task<IActionResult> CreateUser(AppUser appUser)
        {
            return Ok(await Mediator.Send(new Create.Command { AppUser = appUser }));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditUser(string id, AppUser appUser)
        {
            appUser.Id = id;
            return Ok(await Mediator.Send(new Edit.Command { AppUser = appUser }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(string id)
        {
            return Ok(await Mediator.Send(new Delete.Command { Id = id }));
        }

    }
}