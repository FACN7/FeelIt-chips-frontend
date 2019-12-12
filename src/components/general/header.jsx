import React from "react";
import Clock from "react-live-clock";

import "./header.css";

export default function Header({ user = "Ebraheem Abbas" }) {
  return (
    <React.Fragment>
      <nav id="navbar">
        <div className="nav-items">
          <Clock className="Clock" format={"L HH:mm"} timezone={"Israel"} />
          <div className="userName">
            <span>{user}</span>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}
