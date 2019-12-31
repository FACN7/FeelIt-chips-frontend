import React, { useContext } from "react";
import "./Sensors-cure-page.css";
import Table from "../../general/table/table";
import DropList from "../../general/Drop-down-list/Drop-down-list";
import tableContext from "../../general/table/tableContext";
import { useHistory } from "react-router-dom";
import endpointUrl from "../../../config";
import { InfoContext } from "../../new-print-page/printContext";

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
    credentials: "include",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(() => setTable({ table: init }));
};

export default function CurePage() {
  const { info, setInfo } = useContext(InfoContext);
  const [type, setType] = React.useState("");
  const [table, setTable] = React.useReducer(reducer, { ...init });
  const history = useHistory();

  return (
    <React.Fragment>
      <tableContext.Provider value={{ table, setTable }}>
        <div className="curingContainer">
          <div className="dropDownContainer">
            <span>Curing :</span>
            <DropList
              className="DropListContainer"
              selectItem={itemIdx => {
                setTable({ reset: true });
                setType(itemIdx ? items[itemIdx - 1].text : "");
              }}
              items={items}
            ></DropList>
          </div>
          {type === "" ? null : (
            <div className="CuringInput">
              <Table Type={type}></Table>
              <div className="curingButtonContainer">
                <button
                  onClick={() => {
                    postCuring(setTable, table, type, info._id);
                  }}
                >
                  Add Curing
                </button>
              </div>
            </div>
          )}

        </div>
          <div className="navigationContainer">
            <div className="navigationButtonContainer">
              <button
                onClick={() => {
                  history.push("/Sensors");
                }}
              >
                BACK
              </button>
            </div>
            <div className="navigationButtonContainer">
              <button
                onClick={e => {
                  setInfo(null);
                  history.push("/");
                }}
              >
                DONE
              </button>
            </div>
          </div>
      </tableContext.Provider>
    </React.Fragment>
  );
}
