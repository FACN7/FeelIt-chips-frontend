import React from "react";
import { Route, useHistory } from "react-router-dom";
import { useAsync } from "react-async";
import checkAuth from "../../../scripts/checkAuth";

export default ({ component, path, adminLevel = false }) => {
  const history = useHistory();
  const { data, isPending } = useAsync({ promiseFn: checkAuth });

  if (isPending) return "Loading...";
  if (
    data.isAuthenticated === false ||
    (adminLevel !== data.admin && adminLevel === true)
  ) {
    history.push("/");
    return null;
  }
  return <Route path={path} component={component} />;
};
