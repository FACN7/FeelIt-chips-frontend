import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import tableContext from "../../../general/table/tableContext";
import Table from "../../../general/table/table";
import "./list.css";
import endpointUrl from "../../../../config";
import { InfoContext } from "../../../new-print-page/printContext";

const init = { a0: {}, a1: {}, a2: {}, a3: {}, a4: {}, a5: {}, a6: {}, a7: {} };

const ConvertTime = date => {
  return new Date(date).toLocaleString();
};

const processData = resistanceTable => {
  const newTable = { ...init };
  Object.keys(newTable).forEach((sensorArea, idx) => {
    newTable[sensorArea].layer = resistanceTable.layer[`a${idx}`];
    newTable[sensorArea].resistance = resistanceTable.resistance[`a${idx}`];
  });
  return newTable;
};

function List({ Curing = true }) {
  const { info, setInfo } = useContext(InfoContext);
  const [list, setList] = React.useState([]);
  const [showMoreById, setshowMoreById] = React.useState(-1);
  const { setTable } = React.useContext(tableContext);

  const history = useHistory();
  React.useEffect(() => {
    fetch(`${endpointUrl}/get-sensors`, { credentials: "include" })
      .then(res => res.json())
      .then(data => setList(data.sensors.reverse()));
  }, []);
  React.useEffect(() => {
    if (showMoreById !== -1) {
      fetch(`${endpointUrl}/get-sensors/${showMoreById}`, {
        credentials: "include"
      })
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
                showMoreById === sensor._id
                  ? setshowMoreById(-1)
                  : setshowMoreById(sensor._id)
              }
            >
              <span>#{sensor.serialNumber}</span>
              <span>Sensor created at {ConvertTime(sensor.createdAt)}</span>
            </div>
            {sensor._id === showMoreById ? (
              <Table Type="res" sensorsProbsNum={2} editable={false}></Table>
            ) : null}
          </div>
          <div className="buttonContainer">
            <button
              onClick={e => {
                setInfo({_id:sensor._id});
                history.push(`/cure-sensor/${sensor.serialNumber}`);
              }}
            >
              cure
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default List;
