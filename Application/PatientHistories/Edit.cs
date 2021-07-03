using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;
namespace Application.PatientHistories
{
     public class Edit
    {
        public class Command : IRequest
        {
            public PatientHistory PatientHistory { get; set; }
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
                var patientHistory = await context.PatientHistories.FindAsync(request.PatientHistory.Id);

                mapper.Map(request.PatientHistory, patientHistory);

                await context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}