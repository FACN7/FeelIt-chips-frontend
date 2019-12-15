import React from "react";
import List from "./Sensors-list/list";
import { useHistory } from "react-router-dom";
import "./Sensors-list-page.css";

export default function ListPage() {
  const history = useHistory();

  return (
    <React.Fragment>
      <div className="Container">
        <span>Hello please select chip to cure</span>
        <List></List>
        <button
          onClick={e => {
            history.goBack();
          }}
        >
          BACK{" "}
        </button>
      </div>
    </React.Fragment>
  );
}
