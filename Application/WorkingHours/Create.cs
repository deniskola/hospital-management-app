using System.Threading;
using System.Threading.Tasks;
using Persistence;
using Domain;
using MediatR;

namespace Application.WorkingHours
{
    public class Create
    {
        public class Command : IRequest
        {
            public WorkingHour WorkingHour { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context=context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                _context.WorkingHours.Add(request.WorkingHour);
                
                await _context.SaveChangesAsync();
            
                return Unit.Value;
            }
        }
    }
}