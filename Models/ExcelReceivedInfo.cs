namespace ReactNew.Models
{
    public class ExcelReceivedInfo
    {
        public string TimesheetID { get; set; }
        public int EmployeeID { get; set; }
        public string EmployeeName { get; set; }

        public string EmployeeEmail { get; set; }

        public double PeriodStart { get; set; }

        public double PeriodEnd { get; set; }

        public float Hours { get; set; }

        public string ProjectName { get; set; }
        public string ProjectID { get; set; }
        public int ManagerID { get; set; }
        public string ManagerName { get; set; }
        public string ManagerEmail { get; set; }
    }
}
