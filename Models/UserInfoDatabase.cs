using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ReactNew.Models
{
    public class UserInfoDatabase
    {
        // [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        // [Key]
        public string? Email { get; set; }

        public string? Password { get; set; }
    }
}
