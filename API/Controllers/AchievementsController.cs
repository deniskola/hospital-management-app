using Persistence;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System.Collections.Generic;
using Domain;
using Microsoft.EntityFrameworkCore;
using System;
using MediatR;
using Application.Achievements;
using System.Threading;
using Microsoft.AspNetCore.Authorization;

namespace API.Controllers
{
    [AllowAnonymous]
    public class AchievementsController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Achievement>>> GetAchievement()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Achievement>> GetAchievement(Guid id)
        {
            return await Mediator.Send(new Details.Query { Id = id });
        }

        [HttpPost]
        public async Task<IActionResult> CreateAchievement(Achievement achievement)
        {
            return Ok(await Mediator.Send(new Create.Command { Achievement = achievement }));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditAchievement(Guid id, Achievement achievement)
        {
            achievement.Id = id;
            return Ok(await Mediator.Send(new Edit.Command { Achievement = achievement }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAchievement(Guid id)
        {
            return Ok(await Mediator.Send(new Delete.Command { Id = id }));
        }
    }
}