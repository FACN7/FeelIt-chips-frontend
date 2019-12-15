import React from "react";
import "./chip-cure-page.css";
import Table from "../../general/table/table";
import DropList from "../../general/dropDownList";
import tableContext from "../../general/table/tableContext";
import { useHistory } from "react-router-dom";

const init = [{}, {}, {}, {}, {}, {}, {}, {}];
const emptyTable = [{}, {}, {}, {}, {}, {}, {}, {}];

let reducer = (table, action) => {
  if (action.reset) {
    return JSON.parse(JSON.stringify(emptyTable));
  }

  return JSON.parse(JSON.stringify(action.table));
};

const items = [
  { text: "", value: 0 },
  { text: "Thermal", value: 1 },
  { text: "Photonic", value: 2 }
];

const postCuring = table => {
};

export default function CurePage() {
  const [showTable, setShowTable] = React.useState("");
  const [table, setTable] = React.useReducer(reducer, [...init]);
  const history = useHistory();

  return (
    <React.Fragment>
      <tableContext.Provider value={{ table, setTable }}>
        <div className="Container">
          <DropList
            selectItem={e => {
              setTable({ reset: true });
              e = e === "1" ? 1 : e === "2" ? 2 : 0;
              setShowTable(items[e].text);
            }}
            items={items}
          ></DropList>
          {showTable === "" ? null : (
            <div className="CuringInput">
              <Table Type={showTable}></Table>
              <button onClick={() => postCuring(table)}>Add Curing</button>
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
