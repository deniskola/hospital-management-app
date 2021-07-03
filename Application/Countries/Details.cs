using MediatR;
using Domain;
using System;
using System.Threading.Tasks;
using System.Threading;
using Persistence;

namespace Application.Countries
{
    public class Details
    {
        public class Query : IRequest<Country>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Country>
        {
            private readonly DataContext context;
            public Handler(DataContext context)
            {
                this.context = context;

            }
            public async Task<Country> Handle(Query request, CancellationToken cancellationToken)
            {
                return await context.Countries.FindAsync(request.Id);
            }
        }
    }
}