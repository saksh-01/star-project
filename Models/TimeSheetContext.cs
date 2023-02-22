using Microsoft.EntityFrameworkCore;

namespace ReactNew.Models
{
    public class TimeSheetContext : DbContext
    {
        public TimeSheetContext(DbContextOptions<TimeSheetContext> options)
            : base(options) { }

        DbSet<TimeSheet> TimeSheet { get; set; }
    }
}
