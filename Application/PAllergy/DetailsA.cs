using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.PAllergy
{
    public class Details
    {
        public class Query : IRequest<PAllergies>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, PAllergies>
        {
            private readonly DataContext context;
            public Handler(DataContext context)
            {
                this.context = context;
            }

            public async Task<PAllergies> Handle(Query request, CancellationToken cancellationToken)
            {
                 return await context.PAllergies.FindAsync(request.Id);
            }
        }
    }
}