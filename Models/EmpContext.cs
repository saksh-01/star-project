using Microsoft.EntityFrameworkCore;

namespace ReactNew.Models
{
    public class EmpContext : DbContext
    {
        public EmpContext(DbContextOptions<EmpContext> options)
            : base(options) { }

        DbSet<Employee> Employees { get; set; }
    }
}
