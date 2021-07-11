using Persistence;
using System;
using Domain;
using System.Threading.Tasks;
using System.Threading;
using MediatR;

namespace Application.WorkingHours
{
    public class Details
    {
        public class Query : IRequest<WorkingHour>
        {

            public int Id { get; set; }

        }
        public class Handler : IRequestHandler<Query, WorkingHour>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;

            }

            public async Task<WorkingHour> Handle(Query request, CancellationToken cancellation){
                return await _context.WorkingHours.FindAsync(request.Id);
            }
        }
    }
}