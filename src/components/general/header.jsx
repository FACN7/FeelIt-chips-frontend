import React from "react";
import Clock from "react-live-clock";
import checkAuth from "../../scripts/checkAuth";
import { useAsync } from "react-async";
import "./header.css";

export default function Header() {
  const { data, isPending } = useAsync({ promiseFn: checkAuth });

  if (isPending) return "Loading...";

  return (
    <React.Fragment>
      <nav id="navbar">
        <div className="nav-items">
          <Clock className="Clock" ticking={true} format={"L HH:mm"} />
          <div className="userName">{(data&&data.isAuthenticated) ? data.employee:null}</div>
        </div>
      </nav>
    </React.Fragment>
  );
}
