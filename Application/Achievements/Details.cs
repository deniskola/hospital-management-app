using Persistence;
using System;
using Domain;
using System.Threading.Tasks;
using System.Threading;
using MediatR;

namespace Application.Achievements
{
    public class Details
    {
        public class Query : IRequest<Achievement>
        {

            public Guid Id { get; set; }

        }
        public class Handler : IRequestHandler<Query, Achievement>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;

            }

            public async Task<Achievement> Handle(Query request, CancellationToken cancellation){
                return await _context.Achievements.FindAsync(request.Id);
            }
        }
    }
}