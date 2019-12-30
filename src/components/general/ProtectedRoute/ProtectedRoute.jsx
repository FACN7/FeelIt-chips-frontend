import React from "react";
import { Route, useHistory } from "react-router-dom";
import { useAsync } from "react-async";
import checkAuth from "../../../scripts/checkAuth";
import CircularProgress from "../CircularProgress";

export default ({
  component: Component,
  path,
  adminLevel = false,
  setUser,
  user = {}
}) => {
  const history = useHistory();
  const { data, isPending } = useAsync({ promiseFn: checkAuth });

  if (isPending) return <CircularProgress />;
  if (
    !data ||
    data.isAuthenticated === false ||
    (adminLevel === true && data.admin === false)
  ) {
    setUser(null);
    history.push("/sign-in");
    return null;
  }
  setUser(data);
  return <Route path={path} render={() => <Component user={user} />} />;
};
