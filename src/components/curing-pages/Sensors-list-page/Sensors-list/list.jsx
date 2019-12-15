import React from "react";
import { useHistory } from "react-router-dom";
import tableContext from "../../../general/table/tableContext";
import Table from "../../../general/table/table";
import "./list.css";

const init = { s0: {}, s1: {}, s2: {}, s3: {}, s4: {}, s5: {}, s6: {}, s7: {} };

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
      fetch("https://api.myjson.com/bins/uwymg")
      .then(res => res.json())
      .then(res => setTable(init));
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

              {sensor.serialNumber === showMore ? (
                <Table Type="res" sensorsProbsNum={2}></Table>
              ) : null}
            </a>
          </div>
          <button
            onClick={e => {
              Curing
                ? history.push(`/cure-chip/${sensor.serialNumber}`)
                : history.push(`/coat-chip/${sensor.serialNumber}`);
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
