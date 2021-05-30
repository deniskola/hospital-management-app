using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Persistence;

namespace Application.Abouts
{
    public class List
    {
        public class Query : IRequest<List<About>> { }

        public class Handler : IRequestHandler<Query, List<About>>
        {
            private readonly DataContext context;
            public Handler(DataContext context)
            {
                this.context = context;

            }
            public async Task<List<About>> Handle(Query request, CancellationToken cancellationToken)
            {

                return await context.About.ToListAsync(cancellationToken);
            }
        }
    }
}