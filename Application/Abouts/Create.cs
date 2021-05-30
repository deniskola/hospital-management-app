using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Abouts
{
    public class Create
    {
        public class Command : IRequest
        {
            public About About { get; set; }
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
                context.About.Add(request.About);

                await context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}