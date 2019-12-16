import React from "react";
import "./Sensors-cure-page.css";
import Table from "../../general/table/table";
import DropList from "../../general/Drop-down-list/Drop-down-list";
import tableContext from "../../general/table/tableContext";
import { useHistory } from "react-router-dom";

const init = { s0: {}, s1: {}, s2: {}, s3: {}, s4: {}, s5: {}, s6: {}, s7: {} };

let reducer = (table, action) => {
  if (action.reset) {
    return JSON.parse(JSON.stringify(init));
  }
  return JSON.parse(JSON.stringify(action.table));
};

const items = [
  { text: "", value: 0 },
  { text: "Thermal", value: 1 },
  { text: "Photonic", value: 2 }
];

const postCuring = (setTable,table, type, _id) => {
  const postData = { _id, curing: { type, ...table } };
  fetch("/curing-table", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type":"application/json"
    }
  }).then(()=>setTable(init));
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
            selectItem={e => {
              setTable({ reset: true });
              e = e === "1" ? 1 : e === "2" ? 2 : 0;
              setType(items[e].text);
            }}
            items={items}
          ></DropList>
          {type === "" ? null : (
            <div className="CuringInput">
              <Table Type={type}></Table>
              <button onClick={() => postCuring(setTable,table, type)}>
                Add Curing
              </button>
            </div>
          )}

          <div className="buttonContainer">
            <button
              onClick={e => {
                history.goBack();
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
