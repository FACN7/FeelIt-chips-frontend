import React from "react";
import Clock from "react-live-clock";
import "./header.css";
import endpointUrl from "../../config";
import { useHistory } from "react-router-dom";

export default function Header({ user, setUser }) {
  const history = useHistory();

  const handleSignOut = () => {
    fetch(`${endpointUrl}/signout`, {
      credentials: "include"
    }).then(res => {
      if (res.status === 302) {                
        history.push("/sign-in");
        setUser(null)
      }
    });
  };

  return (
    <nav id="navbar">
      <div className="nav-items">
        <div className="auth">
          <Clock className="Clock" ticking={true} format={"L HH:mm"} />
          <div>{user && user.isAuthenticated ? user.employee : null}</div>
        </div>
        {user && user.isAuthenticated ? (          
          <button id="signout" onClick={() => handleSignOut()}>
            sign out
          </button>          
        ) : null}
      </div>
    </nav>
  );
}
