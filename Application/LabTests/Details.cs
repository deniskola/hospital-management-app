using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.LabTests
{
    public class Details
    {
         public class Query : IRequest<LabTest>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, LabTest>
        {
            private readonly DataContext context;
            public Handler(DataContext context)
            {
                this.context = context;
            }

            public async Task<LabTest> Handle(Query request, CancellationToken cancellationToken)
            {
                 return await context.LabTests.FindAsync(request.Id);
            }
        }
    }
}