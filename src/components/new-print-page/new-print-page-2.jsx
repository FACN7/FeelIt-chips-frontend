import React, { useContext, useReducer } from "react";
import { useHistory } from "react-router-dom";
import { InfoContext } from "./printContext";
import tableContext from "../general/table/tableContext";
import Table from "../general/table/table";
import endpointUrl from "../../config";
// import PrintForm from "./new-print-form/print-form";

const init = {
  a0: {},
  a1: {},
  a2: {},
  a3: {},
  a4: {},
  a5: {},
  a6: {},
  a7: {}
};
const processData = table => {
  const newTable = { layer:{},resistance:{}};
  Object.keys(table).forEach((sensorArea, idx) => {
    newTable.layer[sensorArea] = table[sensorArea].layer||null;
    newTable.resistance[sensorArea] = table[sensorArea].resistance||null;
  });
  
  return newTable;
};


const NewPrintPage2 = () => {
  const { info, setInfo } = useContext(InfoContext);

  const reducer = (table, action) => {
    if (action.reset) {
      return JSON.parse(JSON.stringify(init));
    }

    return JSON.parse(JSON.stringify(action.table));
  };

  const [table, setTable] = useReducer(reducer, { ...init });

  const history = useHistory();

  return (
    <div>
      <tableContext.Provider value={{ table, setTable }}>
        <p>inf is {JSON.stringify(info)}</p>

        <Table Type="res" sensorsProbsNum={2} editable={true}></Table>

        <button
          onClick={() => {

            const processedTable = processData(table);
            fetch(`${endpointUrl}/print-resistance-table`, {
              method: "POST",
              body: JSON.stringify(processedTable),
              headers: {
                "Content-Type": "application/json"
              }
            });
            setInfo(null);
            history.push("/");
          }}
        >
          FINISK
        </button>
        <button
          onClick={() => {
            history.push("/new-print");
          }}
        >
          BACK
        </button>
      </tableContext.Provider>
    </div>
  );
};

export default NewPrintPage2;
