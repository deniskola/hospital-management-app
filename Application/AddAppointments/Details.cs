using Persistence;
using System;
using Domain;
using System.Threading.Tasks;
using System.Threading;
using MediatR;

namespace Application.AddAppointments
{
    public class Details
    {
        public class Query : IRequest<AddAppointment>
        {

            public Guid Id { get; set; }

        }
        public class Handler : IRequestHandler<Query, AddAppointment>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;

            }

            public async Task<AddAppointment> Handle(Query request, CancellationToken cancellation){
                return await _context.Appointments.FindAsync(request.Id);
            }
        }
    }
}