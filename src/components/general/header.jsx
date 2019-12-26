import React from "react";
import Clock from "react-live-clock";
import "./header.css";

export default function Header({ user }) {
  return (
    <React.Fragment>
      <nav id="navbar">
        <div className="nav-items">
          <Clock className="Clock" ticking={true} format={"L HH:mm"} />
          <div className="userName">{user ? user.employee : null}</div>
        </div>
      </nav>
    </React.Fragment>
  );
}
