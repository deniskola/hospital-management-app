using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Services
{
    public class Delete
    {
        public class Command : IRequest
        {

            public Guid Id { get; set; }

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
              var aboutus = await this._context.SAboutUs.FindAsync(request.Id);
          
              this._context.Remove(aboutus);
          
              await this._context.SaveChangesAsync();
              
              return Unit.Value;
            }
        }
    }
}