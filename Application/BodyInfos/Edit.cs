using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.BodyInfos
{
    public class Edit
    {
        public class Command : IRequest
        {
            public BodyInfo BodyInfo { get; set; }
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
                var bodyinfo = await context.BodyInfos.FindAsync(request.BodyInfo.Id);

                mapper.Map(request.BodyInfo, bodyinfo);

                await context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}