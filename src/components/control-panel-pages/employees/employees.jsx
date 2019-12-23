import React from "react";
import List from "./employees-list/employees-list";
import { useHistory } from "react-router-dom";
import "./employees.css";
export default () => {
  const history = useHistory();

  return (
    <React.Fragment>
        <button id="newEmployee"
          onClick={e => {
            history.push("/new-employee");
          }}
        >
          new employee
        </button>
      <div className="listContainer">
        <List></List>
        <button
          id="back"
          onClick={e => {
            history.push("/control-panel");
          }}
        >
          BACK
        </button>
      </div>
    </React.Fragment>
  );
};
