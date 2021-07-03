using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Persistence;

namespace Application.Countries
{
    public class List
    {
        public class Query : IRequest<List<Country>> { }

        public class Handler : IRequestHandler<Query, List<Country>>
        {
            private readonly DataContext context;
            public Handler(DataContext context)
            {
                this.context = context;

            }
            public async Task<List<Country>> Handle(Query request, CancellationToken cancellationToken)
            {

                return await context.Countries.ToListAsync(cancellationToken);
            }
        }
    }
}