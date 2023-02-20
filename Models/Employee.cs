using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ReactNew.Models
{
    public class Employee
    {
        [Key]
        public int EmployeeID { get; set; }

        // [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        // public int Id { get; set; }
        [DataType(DataType.EmailAddress, ErrorMessage = "Enter valid email address")]
        public string EmailID { get; set; }

        public string EmployeeName { get; set; }

        public string Department { get; set; }
        public string Gender { get; set; }

        [DataType(DataType.PhoneNumber, ErrorMessage = "Enter Valid Phone Number")]
        public string PhoneNumber { get; set; }

        [DataType(DataType.ImageUrl, ErrorMessage = "User Image")]
        public string? ImageUrl { get; set; }

        public string DOJ { get; set; }

        public string DOB { get; set; }
        // public string Role { get; set; }

        // public string EmployeesManager { get; set; }
    }
}
