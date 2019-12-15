import React from "react";
import { useHistory } from "react-router-dom";
import "./chip-actions.css";
export default function ChipActionPage() {
  const history = useHistory();
  return (
    <React.Fragment>
      <div className="Container">
        <div className="button-container">
          <button
            onClick={() => {
              history.push("/new-print");
            }}
          >
            Print new
          </button>
          <button
            onClick={() => {
              history.push("/Curing");
            }}
          >
            Curing
          </button>
          <button
            onClick={() => {
              history.push("/Coating");
            }}
          >
            Coating
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}
