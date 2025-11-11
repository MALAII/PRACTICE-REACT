// Create a Login Form — if username = admin and password = 1234, show “Login Successful”, 
// else show “Invalid Credentials”.
import { useState } from "react";

function LoginCheck() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "1234") {
      setMessage("✅ Login Successful!");
    } else {
      setMessage("❌ Invalid Credentials");
    }
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <label>Username: </label>
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
        <br />

        <label>Password: </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />

        <button type="submit">Login</button>
      </form>

      <h3>{message}</h3>
    </>
  );
}

export default LoginCheck;
