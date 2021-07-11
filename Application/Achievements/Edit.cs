using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Achievements
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Achievement Achievement { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;

            }
            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var achievement = await _context.Achievements.FindAsync(request.Achievement.Id);

                _mapper.Map(request.Achievement, achievement);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}