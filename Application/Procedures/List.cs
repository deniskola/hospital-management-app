using MediatR;
using System.Collections.Generic;
using Domain;
using System.Threading;
using System.Threading.Tasks;
using Persistence;
using Microsoft.EntityFrameworkCore;
using System;
using Microsoft.Extensions.Logging;

namespace Application.Procedures
{
    public class List
    {
        public class Query : IRequest<List<Procedure>> { }

        public class Handler : IRequestHandler<Query, List<Procedure>>
        {
            private readonly DataContext context;

            public Handler(DataContext context)
            {
                this.context = context;
            }

            public async Task<List<Procedure>> Handle(Query request, CancellationToken cancellationToken)
            {
              
                return await context.Procedures.ToListAsync(cancellationToken);
            }
        }
    }
}