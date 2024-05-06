import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msisdn, setMsisdn] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const options = ["ICAP"];
  const [errorMessage, setErrorMessage] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/login", {
        // Add your form field values here (username, password, msisdn, etc.)
        username,
        password,
        msisdn,
      });
      console.log("Login successful", response);
    } catch (error) {
      console.error("Login error", error);
      // Handle login error
    }
  };

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className="container">
      <div className="panelTitleBar">
        <span className="titleLabel">
          iCAP | FE | Platform INT1 | ASI-GP-2HJKGX3
        </span>
      </div>
      <div className="whiteContainer">
        <form onSubmit={handleSubmit}>
          <div className="formItem">
            <label htmlFor="username">Username *</label>
            <input type="text" id="username" className="textInput" required />
          </div>
          <div className="formItem">
            <label htmlFor="password">Password *</label>
            <input
              type="password"
              id="password"
              className="textInput"
              required
            />
          </div>
          <div className="formItem">
            <label htmlFor="msisdn">MSISDN *</label>
            <input type="text" id="msisdn" className="textInput" required />
          </div>
          <div className="formItem">
            <label htmlFor="domain">Domain</label>
            <select id="domain" className="selectInput">
              <option>ICAP</option>
            </select>
          </div>
        </form>
      </div>
      <button type="submit" form="loginForm" className="button">
        Log in
      </button>
      <div className="centeredButtons">
        <button className="linkButton">Forgotten password</button>
        <button className="linkButton">Change password</button>
      </div>
    </div>
  );
}
function App() {
  return <Login />;
}

export default App;
