import React from "react";
import { Route, useHistory } from "react-router-dom";
import { useAsync } from "react-async";
import checkAuth from "../../../scripts/checkAuth";

export default ({ component, path, adminLevel = false, setUser }) => {
  const history = useHistory();
  const { data, isPending } = useAsync({ promiseFn: checkAuth });

  if (isPending) return "Loading...";

  if (!data || !data.isAuthenticated) {
    history.push("/login");
    return null;
  }

  setUser(data);
  return <Route path={path} component={component} />;
};
