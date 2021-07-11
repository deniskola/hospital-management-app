using MediatR;
using System.Collections.Generic;
using Domain;
using System.Threading;
using System.Threading.Tasks;
using Persistence;
using Microsoft.EntityFrameworkCore;
using System;
using Microsoft.Extensions.Logging;

namespace Application.WorkingHours
{
    public class List
    {
        public class Query : IRequest<List<WorkingHour>> {}

        public class Handler : IRequestHandler<Query, List<WorkingHour>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context){
                _context = context;
            }

            public async Task<List<WorkingHour>> Handle(Query request, CancellationToken cancellationToken){
               
                
                return await _context.WorkingHours.ToListAsync(cancellationToken);
            }
            
        }
    }
}