using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.PAllergy
{
    public class Create
    {
        public class Command : IRequest
        {
            public PAllergies PAllergies { get; set; }
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
                context.PAllergies.Add(request.PAllergies);
                await context.SaveChangesAsync();
                return Unit.Value;
            }
        }
    }
}