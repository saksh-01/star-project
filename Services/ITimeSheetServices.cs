using ReactNew.Models;
using ReactNew.ViewModel;
using System.Collections.Generic;

namespace ReactNew.Services
{
    public interface ITimeSheetServices
    {
        List<TimeSheet> GetAllTimeSheet();
        List<TimeSheet> GetTimeSheetByEmailId();

        List<TimeSheet> GetTimeSheetByEmailId(string emailId);

        // ResponseModel SaveTimeSheet(TimeSheet timeSheet);
        ResponseModel SaveTimeSheet(ExcelReceivedInfo timeSheet);
        ResponseModel DeleteTimeSheet(int TimeSheetId);
        List<TimeSheet> GetAllTimeSheetsUnderManager();

        ResponseModel UpdateTimeSheetsByManager(StatusUpdate statusUpdate);
    }
}
