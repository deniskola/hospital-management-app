using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Persistence;

namespace Application.DReminders
{
    public class List
    {
        public class Query : IRequest<List<DReminder>> { }

        public class Handler : IRequestHandler<Query, List<DReminder>>
        {
            private readonly DataContext context;
            public Handler(DataContext context)
            {
                this.context = context;

            }
            public async Task<List<DReminder>> Handle(Query request, CancellationToken cancellationToken)
            {
              
                return await context.DReminders.ToListAsync(cancellationToken);
            }
        }
    }
}