using MediatR;
using System.Collections.Generic;
using Domain;
using System.Threading;
using System.Threading.Tasks;
using Persistence;
using Microsoft.EntityFrameworkCore;
using System;
using Microsoft.Extensions.Logging;

namespace Application.BodyInfos
{
    public class List
    {
        public class Query : IRequest<List<BodyInfo>> { }

        public class Handler : IRequestHandler<Query, List<BodyInfo>>
        {
            private readonly DataContext context;

            public Handler(DataContext context)
            {
                this.context = context;
            }

            public async Task<List<BodyInfo>> Handle(Query request, CancellationToken cancellationToken)
            {
              
                return await context.BodyInfos.ToListAsync(cancellationToken);
            }
        }
    }
}