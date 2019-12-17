import React from "react";
import "./Sensors-cure-page.css";
import Table from "../../general/table/table";
import DropList from "../../general/Drop-down-list/Drop-down-list";
import tableContext from "../../general/table/tableContext";
import { useHistory } from "react-router-dom";
import endpointUrl from "../../../config";

const init = { a0: {}, a1: {}, a2: {}, a3: {}, a4: {}, a5: {}, a6: {}, a7: {} };

const reducer = (table, action) => {
  if (action.reset) {
    return JSON.parse(JSON.stringify(init));
  }

  return JSON.parse(JSON.stringify(action.table));
};

const items = [
  { text: "Thermal", value: 1 },
  { text: "Photonic", value: 2 }
];

const postCuring = (setTable, table, type, _id) => {
  const postData = { _id, curing: { type, ...table } };
  fetch(`${endpointUrl}/curing-table`, {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(() => setTable({ table: init }));
};

export default function CurePage() {
  const [type, setType] = React.useState("");
  const [table, setTable] = React.useReducer(reducer, { ...init });
  const history = useHistory();

  return (
    <React.Fragment>
      <tableContext.Provider value={{ table, setTable }}>
        <div className="Container">
          <DropList
            selectItem={itemIdx => {
              setTable({ reset: true });
              setType(itemIdx ? items[itemIdx - 1].text : "");
            }}
            items={items}
          ></DropList>
          {type === "" ? null : (
            <div className="CuringInput">
              <Table Type={type}></Table>
              <button onClick={() => postCuring(setTable, table, type)}>
                Add Curing
              </button>
            </div>
          )}

          <div className="buttonContainer">
            <button
              onClick={e => {
                history.push("/Sensors");
              }}
            >
              Back
            </button>
            <button
              onClick={e => {
                history.push("/");
              }}
            >
              Done
            </button>
          </div>
        </div>
      </tableContext.Provider>
    </React.Fragment>
  );
}
