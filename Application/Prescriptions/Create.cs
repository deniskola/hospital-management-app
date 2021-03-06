using System.Threading;
using System.Threading.Tasks;
using Persistence;
using Domain;
using MediatR;

namespace Application.Prescriptions
{
    public class Create
    {
        public class Command : IRequest
        {
            public Prescription Prescription { get; set; }
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
                _context.Prescriptions.Add(request.Prescription);
                
                await _context.SaveChangesAsync();
            
                return Unit.Value;
            }
        }
    }
}