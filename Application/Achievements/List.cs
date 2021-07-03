using MediatR;
using System.Collections.Generic;
using Domain;
using System.Threading;
using System.Threading.Tasks;
using Persistence;
using Microsoft.EntityFrameworkCore;
using System;
using Microsoft.Extensions.Logging;

namespace Application.Achievements
{
    public class List
    {
        public class Query : IRequest<List<Achievement>> {}

        public class Handler : IRequestHandler<Query, List<Achievement>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context){
                _context = context;
            }

            public async Task<List<Achievement>> Handle(Query request, CancellationToken cancellationToken){
               
                
                return await _context.Achievements.ToListAsync(cancellationToken);
            }
            
        }
    }
}