using MediatR;
using Domain;
using System;
using System.Threading.Tasks;
using System.Threading;
using Persistence;

namespace Application.DReminders
{
    public class Details
    {
        public class Query : IRequest<DReminder>
        {
            public int id { get; set; }
        }

        public class Handler : IRequestHandler<Query, DReminder>
        {
            private readonly DataContext context;
            public Handler(DataContext context)
            {
                this.context = context;

            }
            public async Task<DReminder> Handle(Query request, CancellationToken cancellationToken)
            {
                return await context.DReminders.FindAsync(request.id);
            }
        }
    }
}