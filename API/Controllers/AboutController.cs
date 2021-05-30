using Persistence;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System.Collections.Generic;
using Domain;
using Microsoft.EntityFrameworkCore;
using System;

namespace API.Controllers
{
    public class AboutController : BaseApiController
    {
        private readonly DataContext context;
        public AboutController(DataContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<About>>> GetAbout()
        {
            return await context.About.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<About>> GetAbout(Guid id)
        { // if we change the id from Guid to int in db we should change the Guid here
            return await context.About.FindAsync(id);
        }
    }
}