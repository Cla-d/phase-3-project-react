import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1>Task Manager</h1>
        {/* <Link to="/projects">View Projects</Link>*/}

        <Link to="/RegistrationForm">SignUp</Link>
        <Link to="/Login">Login</Link>
        <Link to="/create-project">Create a New Project</Link>
    </div>
  );
}

export default LandingPage;