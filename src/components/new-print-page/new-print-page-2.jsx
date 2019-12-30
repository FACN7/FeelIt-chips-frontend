import React, { useContext, useReducer } from "react";
import { useHistory } from "react-router-dom";
import { InfoContext } from "./printContext";
import tableContext from "../general/table/tableContext";
import Table from "../general/table/table";
import endpointUrl from "../../config";
import './new-print-page.css'

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

const NewPrintPage2 = () => {
  /*takes resistance and layers table from form, adds the specs from the previous form and makes 
  one object to be sent to the backend in a POST request
  */
  const processData = table => {
    const newTable = { specs: {}, printingLayers: {}, resistance: {} };
    newTable.specs = JSON.parse(JSON.stringify(info));
    Object.keys(table).forEach((sensorArea, idx) => {
      newTable.printingLayers[sensorArea] = table[sensorArea].layer || null;
      newTable.resistance[sensorArea] = table[sensorArea].resistance || null;
    });

    return newTable;
  };
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
    <tableContext.Provider value={{ table, setTable }}> 
        <h1 class="print-table-header">Initial sensor resistance table</h1>     
        <Table Type="res" sensorsProbsNum={2} editable={true}></Table>
        <div className="navigationContainer">
          <div className="navigationButtonContainer">
            <button
              onClick={() => {
                history.push("/new-print");
              }}
            >
              BACK
            </button>
          </div>
          <div className="navigationButtonContainer">
            <button
              onClick={() => {
                const processedTable = processData(table);
                fetch(`${endpointUrl}/print-resistance-table`, {
                  method: "POST",
                  credentials: "include",
                  body: JSON.stringify(processedTable),
                  headers: {
                    "Content-Type": "application/json"
                  }
                })
                  .then(() => {
                    setInfo(null);
                    history.push("/");
                  })
                  .catch(err => {
                    setInfo(null);
                    alert("oops! something went wrong, please try again");
                  });
              }}
            >
              DONE
            </button>
          </div>
<<<<<<< HEAD
        </div>      
    </tableContext.Provider>
||||||| merged common ancestors
        </div>
      </React.Fragment>
    </tableContext.Provider>
=======
        </div>
      </tableContext.Provider>
>>>>>>> master
  );
};

export default NewPrintPage2;
