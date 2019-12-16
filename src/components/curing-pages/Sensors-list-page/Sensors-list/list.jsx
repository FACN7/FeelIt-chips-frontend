import React from "react";
import { useHistory } from "react-router-dom";
import tableContext from "../../../general/table/tableContext";
import Table from "../../../general/table/table";
import "./list.css";

const init = { s0: {}, s1: {}, s2: {}, s3: {}, s4: {}, s5: {}, s6: {}, s7: {} };

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
  const [showMore, setShowMore] = React.useState(-1);
  const { table, setTable } = React.useContext(tableContext);

  const history = useHistory();
  React.useEffect(() => {
    // /get-sensors
    fetch("https://api.myjson.com/bins/gkey0")
      .then(res => res.json())
      .then(res => setList(res.sensors));
  }, []);
  React.useEffect(() => {
    if (showMore !== -1) {
      //fetch by showMore
      fetch("https://api.myjson.com/bins/uwymg")
        .then(res => res.json())
        .then(res => setTable({ table: processData(res) }));
    }
  }, [showMore]);

  return (
    <div className="list">
      {list.map(sensor => (
        <div key={sensor.serialNumber} className="list-item">
          <div className="data-container">
            <a
              onClick={() =>
                showMore === sensor.serialNumber
                  ? setShowMore(-1)
                  : setShowMore(sensor.serialNumber)
              }
            >
              <span>#{sensor.serialNumber}</span>
              <span>Sensor created {sensor.dateCreated}</span>
            </a>
            {sensor.serialNumber === showMore ? (
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
