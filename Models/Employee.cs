using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ReactNew.Models
{
    public class Employee
    {
        [Key]
        [DataType(DataType.EmailAddress, ErrorMessage = "Enter valid email address")]
        public string EmailID { get; set; }

        public int EmployeeID { get; set; }

        // [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        // public int Id { get; set; }

        public string EmployeeName { get; set; }

        public string Department { get; set; }
        public string Gender { get; set; }

        [DataType(DataType.PhoneNumber, ErrorMessage = "Enter Valid Phone Number")]
        public int PhoneNumber { get; set; }

        [DataType(DataType.ImageUrl, ErrorMessage = "User Image")]
        public string? ImageURL { get; set; }

        // [DataType(DataType.Date)]
        // [NotMapped]
        public DateTime DOJ { get; set; }

        public DateTime DOB { get; set; }
        // public string Role { get; set; }

        // public string EmployeesManager { get; set; }
    }
}
