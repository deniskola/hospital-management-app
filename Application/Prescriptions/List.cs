using MediatR;
using System.Collections.Generic;
using Domain;
using System.Threading;
using System.Threading.Tasks;
using Persistence;
using Microsoft.EntityFrameworkCore;
using System;
using Microsoft.Extensions.Logging;

namespace Application.Prescriptions
{
    public class List
    {
        public class Query : IRequest<List<Prescription>> {}

        public class Handler : IRequestHandler<Query, List<Prescription>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context){
                _context = context;
            }

            public async Task<List<Prescription>> Handle(Query request, CancellationToken cancellationToken){
               
                
                return await _context.Prescriptions.ToListAsync(cancellationToken);
            }
            
        }
    }
}