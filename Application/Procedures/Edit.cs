using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Procedures
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Procedure Procedure{ get; set; }
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
                var procedure = await context.Procedures.FindAsync(request.Procedure.Id);

                mapper.Map(request.Procedure, procedure);

                await context.SaveChangesAsync();

                return Unit.Value;
            }
        }
        
    }
}