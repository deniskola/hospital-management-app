using MediatR;
using Domain;
using System;
using System.Threading.Tasks;
using System.Threading;
using Persistence;

namespace Application.Cities
{
    public class Details
    {
        public class Query : IRequest<City>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, City>
        {
            private readonly DataContext context;
            public Handler(DataContext context)
            {
                this.context = context;

            }
            public async Task<City> Handle(Query request, CancellationToken cancellationToken)
            {
                return await context.Cities.FindAsync(request.Id);
            }
        }
    }
}