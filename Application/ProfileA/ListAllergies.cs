using MediatR;
using System.Collections.Generic;
using Domain;
using System.Threading;
using System.Threading.Tasks;
using Persistence;
using Microsoft.EntityFrameworkCore;
using System;
using Microsoft.Extensions.Logging;

namespace Application.ProfileA
{
    public class ListAllergies
    {
        public class Query : IRequest<List<PAllergies>> { }

        public class Handler : IRequestHandler<Query, List<PAllergies>>
        {
            private readonly DataContext context;

            public Handler(DataContext context)
            {
                this.context = context;
            }

            public async Task<List<PAllergies>> Handle(Query request, CancellationToken cancellationToken)
            {
              
                return await context.PAllergies.ToListAsync(cancellationToken);
            }
        }
    }
}