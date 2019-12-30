import React from "react";
import Clock from "react-live-clock";
import checkAuth from "../../scripts/checkAuth";
import { useAsync } from "react-async";
import "./header.css";
import endpointUrl from "../../config";

const handleSignOut = () => {
  fetch(`${endpointUrl}/signout`, {
    credentials: "include"
  }).then(res => {
    if (res.status === 302) {
      window.location = "/sign-in";
    }
  });
};
export default function Header() {
  const { data, isPending } = useAsync({ promiseFn: checkAuth });

  if (isPending) return "Loading...";
  return (
    <nav id="navbar">
      <div className="nav-items">
        <div className="auth">
          <Clock className="Clock" ticking={true} format={"L HH:mm"} />
          <div>{data && data.isAuthenticated ? data.employee : null}</div>
        </div>
        {data && data.isAuthenticated ? (          
          <button id="signout" onClick={() => handleSignOut()}>
            sign out
          </button>          
        ) : null}
      </div>
    </nav>
  );
}
