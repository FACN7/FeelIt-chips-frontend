import React from "react";
import { Route, useHistory } from "react-router-dom";
import { useAsync } from "react-async";
import checkAuth from "../../../scripts/checkAuth";
import ReactLoading from "react-loading";
import "./ProtectedRoute.css";

export default ({ component, path, adminLevel = false, setUser }) => {
  const history = useHistory();
  const { data, isPending } = useAsync({ promiseFn: checkAuth });

  if (isPending)
    return (
      <ReactLoading
        color="black"
        className="Loading"
        type="spin"
        height={100}
        width={100}
      />
    );

  if (!data || !data.isAuthenticated) {
    history.push("/login");
    return null;
  }

  setUser(data);
  return <Route path={path} component={component} />;
};
