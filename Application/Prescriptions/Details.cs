using Persistence;
using System;
using Domain;
using System.Threading.Tasks;
using System.Threading;
using MediatR;

namespace Application.Prescriptions
{
    public class Details
    {
        public class Query : IRequest<Prescription>
        {

            public int Id { get; set; }

        }
        public class Handler : IRequestHandler<Query, Prescription>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;

            }

            public async Task<Prescription> Handle(Query request, CancellationToken cancellation){
                return await _context.Prescriptions.FindAsync(request.Id);
            }
        }
    }
}