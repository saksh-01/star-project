using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ReactNew.Models
{
    [Table("TimeSheet")]
    public class TimeSheet
    {
        [Key]
        public string TimesheetID { get; set; }

        [ForeignKey("Employees")]
        [StringLength(100)]
        public int EmployeeID { get; set; }
        public string EmployeeName { get; set; }
        public string EmployeeEmail { get; set; }
        public string ProjectID { get; set; }
        public string ProjectName { get; set; }
        public int ManagerID { get; set; }
        public string ManagerName { get; set; }
        public string ManagerEmail { get; set; }

        public DateTime PeriodStart { get; set; }

        public DateTime PeriodEnd { get; set; }

        public double Hours { get; set; }

        public int Status { get; set; }
    }
}
