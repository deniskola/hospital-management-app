using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Procedures
{
    public class Details
    {
        public class Query : IRequest<Procedure>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Procedure>
        {
            private readonly DataContext context;
            public Handler(DataContext context)
            {
                this.context = context;
            }

            public async Task<Procedure> Handle(Query request, CancellationToken cancellationToken)
            {
                 return await context.Procedures.FindAsync(request.Id);
            }
        }
    }
}