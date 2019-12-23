import React from "react";
import { useHistory } from "react-router-dom";
import PrinterIcon from "../../Icons/printer.svg";
import StorageIcon from "../../Icons/database.svg";
import ControlPanel from "../../Icons/control-panel.svg";
import { useAsync } from "react-async";
import checkAuth from "../../scripts/checkAuth";

import "./Sensors-actions.css";
export default function SensorsActionPage() {
  const history = useHistory();
  const { data, isPending } = useAsync({ promiseFn: checkAuth });

  if (isPending) return "Loading...";
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
              <div className="spanContainer">
                <span>Print new</span>
              </div>
            </button>
          </div>

          <div className="button-container">
            <button
              onClick={() => {
                history.push("/Sensors");
              }}
            >
              <img src={StorageIcon} alt="storage" />
              <div className="spanContainer">
                <span>Storage</span>
              </div>
            </button>
          </div>  
          {data&&data.admin ? (
            <div className="button-container">
              <button
                onClick={() => {
                  history.push("/control-panel");
                }}
              >
                <img src={ControlPanel} alt="Control panel" />
                <div className="spanContainer">
                  <span>Control panel</span>
                </div>
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </React.Fragment>
  );
}
