using MediatR;
using Domain;
using System;
using System.Threading.Tasks;
using System.Threading;
using Persistence;

namespace Application.Users
{
    public class Details
    {
        public class Query : IRequest<AppUser>
        {
            public string Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, AppUser>
        {
            private readonly DataContext context;
            public Handler(DataContext context)
            {
                this.context = context;

            }
            public async Task<AppUser> Handle(Query request, CancellationToken cancellationToken)
            {
                return await context.AppUsers.FindAsync(request.Id);
            }
        }
    }
}