using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Services
{
    public class Create
    {
        public class Command : IRequest
        {
            public AboutUs AboutUs { get; set; }
        }
        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                this._context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
              this._context.SAboutUs.Add(request.AboutUs);

              await _context.SaveChangesAsync();

              return Unit.Value;
            }
        }
    }
}