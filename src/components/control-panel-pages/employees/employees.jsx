import React from "react";
import EmployeeList from "./employees-list/employees-list";
import { useHistory } from "react-router-dom";
import "./employees.css";
export default () => {
  const history = useHistory();

  return (
    <div id="employees">
      <button
        id="newEmployee"
        onClick={e => {
          history.push("/new-employee");
        }}
      >
        new employee
      </button>
      <div className="listContainer">
        <EmployeeList />
        <button
          id="empback"
          onClick={e => {
            history.push("/control-panel");
          }}
        >
          BACK
        </button>
      </div>
    </div>
  );
};
