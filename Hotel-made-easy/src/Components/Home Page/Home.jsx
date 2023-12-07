import React from "react";
import './home.css'
import Hotel from '../../assets/react.svg'
import { useOktaAuth } from "@okta/okta-react"
import { useNavigate } from "react-router";

function Home() {
  const { oktaAuth } = useOktaAuth()
    const history = useNavigate();
    oktaAuth.isAuthenticated().then(data => {
        if (data) {
            history('/routed');
        }
    });

    const handleSubmit = () => {
        oktaAuth.signInWithRedirect()
    }

  return (
    <div className="home">
      <div className="logo-text">Hotel Made Easy</div>
      <div className="content-split">
        <div className="left-side">
          <div className="content">
            <h5>Experience luxury for less! <br />
            Discover unbeatable deals on top-notch hotels in your area</h5>
          </div>
          <div className="buttons">
            <button className="signUp"> Sign Up</button>
            <button className="login" onClick={handleSubmit}>Login</button>
          </div>
        </div>
        <div className="right-side"> 
         <img src={Hotel} alt="SVG" className="img-svg"/>
        </div>
      </div>
    </div>
  );
}

export default Home;
