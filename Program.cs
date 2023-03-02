// using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;

// var builder = WebApplication.CreateBuilder(args);

// // Add services to the container.

// builder.Services.AddControllersWithViews();

// var app = builder.Build();

// // if (app.Environment.IsDevelopment())
// // {
// //     app.UseSpa(spa =>
// //     {
// //         spa.Options.SourcePath = "ClientApp";
// //         if (app.Environment.IsDevelopment())
// //         {
// //             spa.UseReactDevelopmentServer(npmScript: "start");
// //         }
// //     });
// // }

// // Configure the HTTP request pipeline.
// if (!app.Environment.IsDevelopment())
// {
//     // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
//     app.UseHsts();
// }

// app.UseHttpsRedirection();
// app.UseStaticFiles();
// app.UseRouting();
// app.UseCors(
//     builder => builder.AllowAnyHeader().AllowAnyMethod().WithOrigins("https://localhost:44488")
// );

// app.MapControllerRoute(name: "default", pattern: "{controller}/{action=Index}/{id?}");

// app.MapFallbackToFile("index.html");

// app.Run();

using System.Text;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using ReactNew.Models;
using ReactNew.Services;
using Swashbuckle.AspNetCore.Filters;

namespace JwtTokenAuthentication
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            builder.Services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();

            builder.Services.AddControllers();

            builder.Services.AddDbContext<EmpContext>(
                x => x.UseSqlServer(builder.Configuration.GetConnectionString("ConStr"))
            );
            builder.Services.AddDbContext<TimeSheetContext>(
                x => x.UseSqlServer(builder.Configuration.GetConnectionString("ConStr"))
            );
            builder.Services.AddScoped<IEmployeeService, EmployeeService>();
            builder.Services.AddScoped<ITimeSheetServices, TimeSheetService>();
            builder.Services.AddScoped<IEmailServices, EmailServices>();

            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();

            builder.Services.AddSwaggerGen(options =>
            {
                options.AddSecurityDefinition(
                    "oauth2",
                    new OpenApiSecurityScheme
                    {
                        In = ParameterLocation.Header,
                        Name = "Authorization",
                        Type = SecuritySchemeType.ApiKey
                    }
                );
                options.OperationFilter<SecurityRequirementsOperationFilter>();
            });

            builder.Services
                .AddAuthentication()
                .AddJwtBearer(options =>
                {
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuerSigningKey = true,
                        ValidateAudience = false,
                        ValidateIssuer = false,
                        IssuerSigningKey = new SymmetricSecurityKey(
                            Encoding.UTF8.GetBytes(
                                builder.Configuration.GetSection("appsettings:Token").Value!
                            )
                        )
                    };
                });

            var app = builder.Build();
            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseRouting();
            app.UseCors(
                builder =>
                    builder
                        .AllowAnyHeader()
                        .AllowAnyMethod()
                        .WithOrigins("https://localhost:44488")
                        .AllowCredentials()
            );

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseAuthentication();
            app.UseAuthorization();

            app.MapControllers();

            app.Run();
        }
    }
}
