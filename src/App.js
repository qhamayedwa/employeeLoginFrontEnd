import React, { useEffect, useState, useStyles } from "react";
import axios from "axios";
import "./styles.css";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [msisdn, setMsisdn] = useState("");
  const [employees, setEmployees] = useState([]);
  //const classes = useStyles();
  // const [showOptions, setShowOptions] = useState(false);
  // const options = ["ICAP"];
  // const [errorMessage, setErrorMessage] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const employee = { name, password, msisdn };
    console.log(employee);
    fetch("http://localhost:8080/employee/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(employee),
    }).then(() => {
      console.log("New employee added");
    });
  };

  useEffect(() => {
    fetch("http://localhost:8080/employee/getAll")
      .then((res) => res.json())
      .then((result) => {
        setEmployees(result);
      });
  }, []);

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
            <input type="text" id="username" className="textInput" required value={name} onChange={(e)=>setName(e.target.value)}/>
          </div>
          <div className="formItem">
            <label htmlFor="password">Password *</label>
            <input
              type="password"
              id="password"
              className="textInput"
              required
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <div className="formItem">
            <label htmlFor="msisdn">MSISDN *</label>
            <input type="text" id="msisdn" className="textInput" required value={msisdn} onChange={(e)=>setMsisdn(e.target.value)} />
          </div>
          <div className="formItem">
            <label htmlFor="domain">Domain</label>
            <select id="domain" className="selectInput">
              <option>ICAP</option>
            </select>
          </div>
        </form>
      </div>
      <button type="submit" form="loginForm" className="button" onClick={handleSubmit}>
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
