using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Countries
{
    public class Create
    {
        public class Command : IRequest
        {
            public Country Country { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext context;
            public Handler(DataContext context)
            {
                this.context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                context.Countries.Add(request.Country);

                await context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}