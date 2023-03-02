using ReactNew.Models;
using SendGrid;
using SendGrid.Helpers.Mail;
using System.Reflection;

namespace ReactNew.Services
{
    public class EmailServices : IEmailServices
    {
        public async Task<string> SendEmail(Email email)
        {
            try
            {
                var apiKey =
                    "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";
                var client = new SendGridClient(apiKey);
                var from = new EmailAddress("shivangbabeley.2000@gmail.com", email.senderName);
                var to = new EmailAddress(email.toEmail);
                var msg = MailHelper.CreateSingleEmail(from, to, email.subject, email.body, "");
                var response = await client.SendEmailAsync(msg);
                return "Email Sent successfully";
            }
            catch (Exception ex)
            {
                return "Error Occured try Again ! ";
            }
        }
    }
}
