using MediatR;
using System.Collections.Generic;
using Domain;
using System.Threading;
using System.Threading.Tasks;
using Persistence;
using Microsoft.EntityFrameworkCore;
using System;
using Microsoft.Extensions.Logging;

namespace Application.PatientHistories
{
    public class List
    {
        public class Query : IRequest<List<PatientHistory>> { }

        public class Handler : IRequestHandler<Query, List<PatientHistory>>
        {
            private readonly DataContext context;

            public Handler(DataContext context)
            {
                this.context = context;
            }

            public async Task<List<PatientHistory>> Handle(Query request, CancellationToken cancellationToken)
            {
              
                return await context.PatientHistories.ToListAsync(cancellationToken);
            }
        }
    }
}