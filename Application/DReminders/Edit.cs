using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.DReminders
{
    public class Edit
    {
        public class Command : IRequest
        {
            public DReminder DReminder { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext context;
            private readonly IMapper mapper;

            public Handler(DataContext context,IMapper mapper)
            {
                this.context = context;
                this.mapper = mapper;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var dReminder=await context.DReminders.FindAsync(request.DReminder.id);

                mapper.Map(request.DReminder, dReminder);

                await context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}