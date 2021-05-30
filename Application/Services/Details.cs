using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Services
{
    public class Details
    {
        public class Query : IRequest<AboutUs>
        {
            public Guid Id { get; set; }
        }
        public class Handler : IRequestHandler<Query,AboutUs>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                this._context = context;

            }

            public async Task<AboutUs> Handle(Query request, CancellationToken cancellationToken)
            {

                return await _context.SAboutUs.FindAsync(request.Id);

            }
        }
    }
}