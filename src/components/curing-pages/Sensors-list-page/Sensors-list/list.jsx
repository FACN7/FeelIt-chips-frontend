import React from "react";
import { useHistory } from "react-router-dom";
import "./list.css";
import endpointUrl from "../../../../config";

function List({ Curing = true }) {
  const [list, setList] = React.useState([]);

  const history = useHistory();
  React.useEffect(() => {
    fetch(`${endpointUrl}/get-sensors`)
      .then(res => res.json())
      .then(res => setList(res.sensors));
  }, []);
  return (
    <div className="list">
      {list.map(sensor => (
        <div key={sensor.serialNumber} className="list-item">
          <span>#{sensor.serialNumber}</span>
          <span>Sensor created {sensor.dateCreated}</span>

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
