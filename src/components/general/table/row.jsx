import React from "react";

import "./row.css";
import tableContext from "./tableContext";

export default function Row({
  first_cell,
  row,
  sensorsNum,
  sensorsProbsNum,
  editable
}) {
  const columns = [...Array(sensorsNum + 1).keys()];
  const { table, setTable } = React.useContext(tableContext);

  return (
    <tr className="row" key={row}>
      {columns.map(idx => (
        <td key={row * sensorsProbsNum + idx}>
          {row === 0 && idx === 0 ? null : row === 0 ? (
            <span>s{idx - 1}</span>
          ) : idx === 0 ? (
            first_cell
          ) : (
            <input
              disabled={!editable}
              value={table[`s${idx - 1}`][first_cell] || ""}
              onChange={e => {
                if (e.target.value === "")
                  delete table[`s${idx - 1}`][first_cell];
                else table[`s${idx - 1}`][first_cell] = e.target.value;
                setTable({ table });
              }}
            />
          )}
        </td>
      ))}
    </tr>
  );
}
