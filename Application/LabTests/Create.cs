using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.LabTests
{
    public class Create
    {
        public class Command : IRequest
        {
            public LabTest LabTest { get; set; }
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
                context.LabTests.Add(request.LabTest);
                await context.SaveChangesAsync();
                return Unit.Value;
            }
        }
    }
}