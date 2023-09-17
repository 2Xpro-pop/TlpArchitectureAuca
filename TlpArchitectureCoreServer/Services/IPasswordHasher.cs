﻿namespace TlpArchitectureCoreServer.Services;

public interface IPasswordHasher
{
    string Hash(string input);
    bool Verify(string input, string hashString);
}