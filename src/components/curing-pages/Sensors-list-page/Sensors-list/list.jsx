import React from "react";
import { useHistory } from "react-router-dom";
import tableContext from "../../../general/table/tableContext";
import Table from "../../../general/table/table";
import "./list.css";
import endpointUrl from "../../../../config";

const init = { a0: {}, a1: {}, a2: {}, a3: {}, a4: {}, a5: {}, a6: {}, a7: {} };

const processData = resistanceTable => {
  const newTable = { ...init };
  Object.keys(newTable).forEach((sensorArea, idx) => {
    newTable[sensorArea].layer = resistanceTable.layer[`a${idx}`];
    newTable[sensorArea].resistance = resistanceTable.resistance[`a${idx}`];
  });
  return newTable;
};

function List({ Curing = true }) {
  const [list, setList] = React.useState([]);
  const [showMoreById, setshowMoreById] = React.useState(-1);
  const { setTable } = React.useContext(tableContext);

  const history = useHistory();
  React.useEffect(() => {
    fetch(`${endpointUrl}/get-sensors`)
      .then(res => res.json())
      .then(res => setList(res.sensors));
  }, []);
  React.useEffect(() => {
    if (showMoreById !== -1) {
      fetch(`${endpointUrl}/get-sensors/${showMoreById}`)
        .then(res => res.json())
        .then(res => setTable({ table: processData(res) }));
    }
  }, [showMoreById]);

  return (
    <div className="list">
      {list.map(sensor => (
        <div key={sensor.serialNumber} className="list-item">
          <div className="data-container">
            <div
              onClick={() =>
                showMoreById === sensor.serialNumber
                  ? setshowMoreById(-1)
                  : setshowMoreById(sensor.serialNumber)
              }
            >
              <span>#{sensor.serialNumber}</span>
              <span>Sensor created {sensor.dateCreated}</span>
            </div>
            {sensor.serialNumber === showMoreById ? (
              <Table Type="res" sensorsProbsNum={2} editable={false}></Table>
            ) : null}
          </div>
          <button
            onClick={e => {
              Curing
                ? history.push(`/cure-sensor/${sensor.serialNumber}`)
                : history.push(`/coat-sensor/${sensor.serialNumber}`);
            }}
          >
            {Curing ? "Go To Curing" : "Go To Coating"}
          </button>
        </div>
      ))}
    </div>
  );
}
export default List;
