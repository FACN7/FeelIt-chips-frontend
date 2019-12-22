import React from "react";
import { useHistory } from "react-router-dom";
import PrinterIcon from "../../Icons/printer.svg";
import StorgeIcon from "../../Icons/database.svg";


import "./Sensors-actions.css";
export default function SensorsActionPage() {
  const history = useHistory();

  return (
    <React.Fragment>
      <div className="actionContainer">
        <div className="buttons-container">
          <div className="button-container">
            <button
              onClick={() => {
                history.push("/new-print");
              }}
            >
              <img src={PrinterIcon} alt="printer" />
              <span>Print new</span>
            </button>
          </div>

          <div className="button-container">
            <button
              onClick={() => {
                history.push("/Sensors");
              }}
            >
              <img src={StorgeIcon} alt="storage" />
              <span>Storge</span>
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
