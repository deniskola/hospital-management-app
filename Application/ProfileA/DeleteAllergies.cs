using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.ProfileA
{
    public class DeleteAllergies
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
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
                var pAllergies = await context.PAllergies.FindAsync(request.Id);

                context.Remove(pAllergies);

                await context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}