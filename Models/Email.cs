using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ReactNew.Models
{
    public class Email
    {
        public string toEmail { get; set; }

        public string senderName { get; set; }

        public string subject { get; set; }

        public string body { get; set; }
    }
}
