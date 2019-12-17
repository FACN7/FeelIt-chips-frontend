import React from "react";
import List from "./Sensors-list/list";
import { useHistory } from "react-router-dom";
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
        <div className="Container">
          <span>Hello please select sensor to cure</span>
          <List></List>
          <button
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
