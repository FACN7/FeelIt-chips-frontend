import React from "react";
import { useHistory } from "react-router-dom";
import "./list.css";
export default function List({ Curing = true }) {
  const [list, setList] = React.useState([]);
  const history = useHistory();
  React.useEffect(() => {
    // /get-sensors
    fetch("https://api.myjson.com/bins/11727g")
      .then(res => res.json())
      .then(res => setList(res.chips));
  }, []);
  return (
    <div className="list">
      {list.map(chip => (
        <div key={chip.serialNumber} className="list-item">
            <div>
              <span>{chip.serialNumber}</span>
            </div>
          <button
            onClick={e => {
              Curing
                ? history.push(`/cure-chip/${chip.serialNumber}`)
                : history.push(`/coat-chip/${chip.serialNumber}`);
            }}
          >
            {Curing ? "Go To Curing" : "Go To Coating"}
          </button>
        </div>
      ))}
    </div>
  );
}
