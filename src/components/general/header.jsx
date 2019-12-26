import React from "react";
import Clock from "react-live-clock";
import checkAuth from "../../scripts/checkAuth";
import { useAsync } from "react-async";
import "./header.css";
import endpointUrl from "../../config";
import { useHistory } from "react-router-dom";

const handleSignOut = history => {
  fetch(`${endpointUrl}/signout`, {
    credentials: "include"
  }).then(res => (res.status === 302 ? (window.location = "/") : null));
};
export default function Header() {
  const { data, isPending } = useAsync({ promiseFn: checkAuth });
  const history = useHistory();

  if (isPending) return "Loading...";
  return (
    <nav id="navbar">
      <div className="nav-items">
        <div className="auth">
          <Clock className="Clock" ticking={true} format={"L HH:mm"} />
          <div>{data && data.isAuthenticated ? data.employee : null}</div>
        </div>
        {data && data.isAuthenticated ? (
          <div>
            <button id="signout" onClick={() => handleSignOut(history)}>
              sign out
            </button>
          </div>
        ) : null}
      </div>
    </nav>
  );
}
