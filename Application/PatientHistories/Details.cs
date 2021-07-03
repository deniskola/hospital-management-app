using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.PatientHistories
{
   public class Details
    {
         public class Query : IRequest<PatientHistory>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, PatientHistory>
        {
            private readonly DataContext context;
            public Handler(DataContext context)
            {
                this.context = context;
            }

            public async Task<PatientHistory> Handle(Query request, CancellationToken cancellationToken)
            {
                 return await context.PatientHistories.FindAsync(request.Id);
            }
        }
    }
}