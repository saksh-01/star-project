using Microsoft.EntityFrameworkCore;

namespace ReactNew.Models
{
    public class EmpContext : DbContext
    {
        public EmpContext(DbContextOptions options)
            : base(options) { }

        DbSet<Employee> Employees { get; set; }
    }
}
