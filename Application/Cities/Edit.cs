using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Cities
{
    public class Edit
    {
        public class Command : IRequest
        {
            public City City { get; set; }
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
                var city = await context.Cities.FindAsync(request.City.Id);

                mapper.Map(request.City, city);

                await context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}