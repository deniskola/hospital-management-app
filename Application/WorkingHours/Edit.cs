using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.WorkingHours
{
    public class Edit
    {
        public class Command : IRequest
        {
            public WorkingHour WorkingHour { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;

            }
            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var workhour = await _context.WorkingHours.FindAsync(request.WorkingHour.Id);

                _mapper.Map(request.WorkingHour, workhour);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}