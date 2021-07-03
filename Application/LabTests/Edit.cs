using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.LabTests
{
    public class Edit
    {
        public class Command : IRequest
        {
            public LabTest LabTest { get; set; }
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
                var labtest = await context.LabTests.FindAsync(request.LabTest.Id);

                mapper.Map(request.LabTest, labtest);

                await context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}