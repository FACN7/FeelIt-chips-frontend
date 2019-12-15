import React from "react";
import Clock from "react-live-clock";

import "./header.css";

export default function Header() {
  return (
    <React.Fragment>
      <nav id="navbar">
        <div className="nav-items">
          <Clock className="Clock" format={"L HH:mm"} timezone={"Israel"} />
          <div className="userName">
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}
