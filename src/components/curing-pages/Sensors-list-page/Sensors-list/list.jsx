import React from "react";
import { useHistory } from "react-router-dom";
import "./list.css";

const getResistenceTable=(_id)=>{

}
export default function List({ Curing = true }) {
  const [list, setList] = React.useState([]);
  const history = useHistory();
  React.useEffect(() => {
    // /get-sensors
    fetch("https://api.myjson.com/bins/gkey0")
      .then(res => res.json())
      .then(res => setList(res.sensors));
  }, []);
  return (
    <div className="list">
      {list.map(sensor => (
        <div key={sensor.serialNumber} className="list-item">
          <button onClick={getResistenceTable(sensor._id)}>
            <div>
              <span>#{sensor.serialNumber}</span>
              <span>Sensor created {sensor.dateCreated}</span>
            </div>
          </button>
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
