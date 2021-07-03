using MediatR;
using System.Collections.Generic;
using Domain;
using System.Threading;
using System.Threading.Tasks;
using Persistence;
using Microsoft.EntityFrameworkCore;
using System;
using Microsoft.Extensions.Logging;

namespace Application.LabTests
{
    public class List
    {
        public class Query : IRequest<List<LabTest>> { }

        public class Handler : IRequestHandler<Query, List<LabTest>>
        {
            private readonly DataContext context;

            public Handler(DataContext context)
            {
                this.context = context;
            }

            public async Task<List<LabTest>> Handle(Query request, CancellationToken cancellationToken)
            {
              
                return await context.LabTests.ToListAsync(cancellationToken);
            }
        }
    }
}