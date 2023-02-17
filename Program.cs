using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();

var app = builder.Build();

// if (app.Environment.IsDevelopment())
// {
//     app.UseSpa(spa =>
//     {
//         spa.Options.SourcePath = "ClientApp";
//         if (app.Environment.IsDevelopment())
//         {
//             spa.UseReactDevelopmentServer(npmScript: "start");
//         }
//     });
// }

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();
app.UseCors(
    builder => builder.AllowAnyHeader().AllowAnyMethod().WithOrigins("https://localhost:44488")
);

app.MapControllerRoute(name: "default", pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");

app.Run();
