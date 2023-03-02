using ReactNew.Models;

namespace ReactNew.Services
{
    public interface IEmailServices
    {
        Task<string> SendEmail(Email email);
    }
}
