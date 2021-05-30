using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Persistence;
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Services
{
    public class List
    {
        public class Query : IRequest<List<AboutUs>> { }

        public class Handler : IRequestHandler<Query, List<AboutUs>>
        {
            private readonly DataContext _context;
       
            public Handler(DataContext context)
            {
                this._context = context;
            }

            public async Task<List<AboutUs>> Handle(Query request, CancellationToken cancellationToken)
            {
              

                return await this._context.SAboutUs.ToListAsync(cancellationToken);
            }
        }
    }
}