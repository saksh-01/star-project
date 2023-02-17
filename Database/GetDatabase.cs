using System.Data.SqlClient;
using ReactNew.model;

namespace ReactNew.Database
{
    public class GetDatabase
    {
        public UserInfoDatabase? GetUser(UserPass user)
        {
            Console.WriteLine(user);
            string serverConnection =
                "server=P1-1DS2MQ3-L;Database=CapstoneProject; Integrated security=true";
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
                    UserId = reader.GetInt32(0),
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
