﻿namespace ReactNew.model
{
    public class LoginResponse
    {
        public bool success { get; set; }

        public string? Token { get; set; }

        public string? Message { get; set; }
    }
}
