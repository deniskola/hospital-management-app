using MediatR;
using Domain;
using System;
using System.Threading.Tasks;
using System.Threading;
using Persistence;

namespace Application.Abouts
{
    public class Details
    {
        public class Query : IRequest<About>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, About>
        {
            private readonly DataContext context;
            public Handler(DataContext context)
            {
                this.context = context;

            }
            public async Task<About> Handle(Query request, CancellationToken cancellationToken)
            {
                return await context.About.FindAsync(request.Id);
            }
        }
    }
}