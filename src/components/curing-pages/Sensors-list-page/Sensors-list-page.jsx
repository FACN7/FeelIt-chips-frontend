import React from "react";
import List from "./Sensors-list/list";
import { useHistory } from "react-router-dom";
import "./Sensors-list-page.css";
import tableContext from "../../general/table/tableContext";

const init = { s0: {}, s1: {}, s2: {}, s3: {}, s4: {}, s5: {}, s6: {}, s7: {} };

let reducer = (table, action) => {
  if (action.reset) {
    return JSON.parse(JSON.stringify(init));
  }
  console.log("reducer",table);
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
              history.goBack();
            }}
          >
            BACK{" "}
          </button>
        </div>
      </tableContext.Provider>
    </React.Fragment>
  );
}
