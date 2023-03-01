using System.Data.SqlClient;
using ReactNew.Models;

namespace ReactNew.Database
{
    public class GetDatabase
    {
        public UserInfoDatabase? GetUser(UserPass user)
        {
            string serverConnection =
                "server=43.204.27.26;Database=P2T4CapstoneProject;User ID=sa;Password=Incedo@1234;Encrypt=false;";
            SqlConnection scon = new SqlConnection();
            scon.ConnectionString = serverConnection;
            scon.Open();
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = scon;
            cmd.CommandText = "SELECT * from UserInfo where Email=@UserEmail";
            cmd.Parameters.AddWithValue("UserEmail", user.email);
            SqlDataReader reader = cmd.ExecuteReader();
            if (reader.Read())
            {
                UserInfoDatabase UserDatabase = new UserInfoDatabase()
                {
                    Id = reader.GetInt32(0),
                    Email = reader.GetString(1),
                    Password = reader.GetString(2)
                };
                scon.Close();
                return UserDatabase;
            }
            scon.Close();
            return null;
        }
    }
}
