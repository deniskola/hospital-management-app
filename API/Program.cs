using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Persistence;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace API
{
    public class Program
    {
        public static async Task Main(string[] args)
        {
            var host=CreateHostBuilder(args).Build();

            using var scope=host.Services.CreateScope();

            var services=scope.ServiceProvider;

            try{
                var context=services.GetRequiredService<DataContext>();
                context.Database.Migrate();
                await Seed.SeedData(context);
                await SeedProfile.SeedData(context);
                await SeedAppointments.SeedData(context);
                await SeedServices.SeedData(context);
                await SeedActivity.SeedData(context);

            }catch(Exception ex){
                var logger=services.GetRequiredService<ILogger<Program>>();
                logger.LogError(ex,"An error occured during migration");
            }

            await host.RunAsync();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
