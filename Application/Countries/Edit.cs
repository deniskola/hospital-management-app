using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Countries
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Country Country { get; set; }
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
                var country = await context.Countries.FindAsync(request.Country.Id);

                mapper.Map(request.Country, country);

                await context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}