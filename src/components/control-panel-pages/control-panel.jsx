import React from "react";
import { useHistory } from "react-router-dom";
import "./control-panel.css";

export default () => {
  const history = useHistory();

  return (
    <React.Fragment>
      <div className="controlContainer">
        <div className="control-buttons-container">
          <div className="button-container">
            <button
              onClick={() => {
                history.push("/employees");
              }}
            >
              <span>Employees</span>
            </button>
          </div>

          <div className="button-container">
            <button
              onClick={() => {
                history.push("/edit-drop-down-lists-page");
              }}
            >
              <span>Dropdowns</span>
            </button>
          </div>
        </div>
        <button
          id="back"
          onClick={() => {
            history.push("/");
          }}
        >
          Back
        </button>
      </div>
    </React.Fragment>
  );
};
