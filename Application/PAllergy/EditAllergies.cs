using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.PAllergy
{
    public class Edit
    {
        public class Command : IRequest
        {
            public PAllergies PAllergies { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext context;
            private readonly IMapper mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                this.mapper = mapper;
                this.context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var pAllergies = await context.PAllergies.FindAsync(request.PAllergies.Id);

                mapper.Map(request.PAllergies, pAllergies);

                await context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}