using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.BodyInfos
{
    public class Details
    {
         public class Query : IRequest<BodyInfo>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, BodyInfo>
        {
            private readonly DataContext context;
            public Handler(DataContext context)
            {
                this.context = context;
            }

            public async Task<BodyInfo> Handle(Query request, CancellationToken cancellationToken)
            {
                 return await context.BodyInfos.FindAsync(request.Id);
            }
        }
    }
}