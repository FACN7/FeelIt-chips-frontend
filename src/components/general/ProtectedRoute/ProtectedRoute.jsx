import React from "react";
import { Route, useHistory } from "react-router-dom";
import { useAsync } from "react-async";
import checkAuth from "../../../scripts/checkAuth";

export default ({ component, path }) => {
  const history = useHistory();
  const { data, isPending } = useAsync({ promiseFn: checkAuth });

  if (isPending) return "Loading...";
  if (!data) history.push("/");
  return <Route path={path} component={component} />;
};
