import React from "react";
import List from "./Sensors-list/list";
import { useHistory } from "react-router-dom";
import PrinterIcon from "../../../Icons/printer-with-plus.svg";
import Loupe from "../../../Icons/loupe.svg";

import "./Sensors-list-page.css";
import tableContext from "../../general/table/tableContext";

const init = { a0: {}, a1: {}, a2: {}, a3: {}, a4: {}, a5: {}, a6: {}, a7: {} };

const reducer = (table, action) => {
  return JSON.parse(JSON.stringify(action.table));
};

export default function ListPage() {
  const history = useHistory();
  const [table, setTable] = React.useReducer(reducer, { ...init });

  return (
    <React.Fragment>
      <tableContext.Provider value={{ table, setTable }}>
        <div className="listContainer">
          <div className="header">
            <div className="inputContainer">
              <input type="text" />
              <img className="loupe" src={Loupe} alt="printer" />
            </div>
            <img
              className="printer"
              src={PrinterIcon}
              alt="printer"
              onClick={e => {
                history.push("/new-print");
              }}
            />
          </div>
          <List></List>
          <button
            id="back"
            onClick={e => {
              history.push("/");
            }}
          >
            BACK
          </button>
        </div>
      </tableContext.Provider>
    </React.Fragment>
  );
}
