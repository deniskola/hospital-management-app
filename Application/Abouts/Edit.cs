using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Abouts
{
    public class Edit
    {
        public class Command : IRequest
        {
            public About About { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext context;
            private readonly IMapper mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                this.context = context;
                this.mapper = mapper;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var about = await context.About.FindAsync(request.About.Id);

                mapper.Map(request.About, about);

                await context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}