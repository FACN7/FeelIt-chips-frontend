import React from "react";
import Clock from "react-live-clock";
import "./header.css";
import endpointUrl from "../../config";

export default function Header({ user }) {
  const handleSignOut = () => {
    fetch(`${endpointUrl}/signout`, {
      credentials: "include"
    }).then(res => {
      if (res.status === 302) {
        window.location = "/";
      }
    });
  };

  return (
    <nav id="navbar">
      <div className="nav-items">
        <div className="auth">
          <Clock className="Clock" ticking={true} format={"L HH:mm"} />
          <div className="userName">{user ? user.employee : null}</div>
        </div>
        {user && user.isAuthenticated ? (
          <div>
            <button id="signout" onClick={() => handleSignOut()}>
              sign out
            </button>
          </div>
        ) : null}
      </div>
    </nav>
  );
}
