import React from "react";
import Clock from "react-live-clock";

import "./header.css";

export default function Header() {
  return (
    <React.Fragment>
      <nav id="navbar">
        <div className="nav-items">
          <Clock className="Clock" ticking={true} format={"L HH:mm"} />
          <div className="userName"></div>
        </div>
      </nav>
    </React.Fragment>
  );
}
