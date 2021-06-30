using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Persistence;

namespace Application.Users
{
    public class List
    {
        public class Query : IRequest<List<AppUser>> { }

        public class Handler : IRequestHandler<Query, List<AppUser>>
        {
            private readonly DataContext context;
            public Handler(DataContext context)
            {
                this.context = context;

            }
            public async Task<List<AppUser>> Handle(Query request, CancellationToken cancellationToken)
            {

                return await context.AppUsers.ToListAsync(cancellationToken);
            }
        }
    }
}