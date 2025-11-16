import logo from "./assets/logo.png";
import certification from "./assets/certification.png"
import "./style.css";
import LoginForm from "./components/Login";

function App(){
  return(
    <center>
      <h1></h1>
      <a href="https://www.siebold-gymnasium.de">
      <p>
        <span className="medium-text">Informationsportal</span>
        <br />
        <span className="big-text">Siebold-Gymnasium Würzburg</span>
      </p>
      </a>
      <br />
      <img src={logo} alt="Schullogo" className="logo"/>
      <p className="small-text">
        <br />
        Version 2025.11.11.161671
      </p>
      <LoginForm />
      <img className="certification" src={certification} alt="Zertifikat" />
    </center>
  )
}

export default App
