using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.AddAppointments
{
    public class Edit
    {
        public class Command : IRequest
        {
            public AddAppointment AddAppointment { get; set; }
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
                var appointment = await _context.Appointments.FindAsync(request.AddAppointment.Id);

                _mapper.Map(request.AddAppointment, appointment);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}