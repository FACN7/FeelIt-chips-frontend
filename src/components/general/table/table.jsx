import React from "react";
import Row from "./row";
import "./table.css";
const ThermalFirstColumn = ["min", "temperature", "resistance", "Valid"];
const PhotonicFirstColumn = ["Pulses", "Height", "resistance", "Valid"];
const printFirstColumn = ["layer", "resistance"];

export default function Table({
  Type,
  sensorsNum = 8,
  sensorsProbsNum = 4
}) {
  const rows = [...Array(sensorsProbsNum + 1).keys()];
  const FirstColumn =
    Type === "Thermal"
      ? ThermalFirstColumn
      : Type === "Photonic"
      ? PhotonicFirstColumn
      : printFirstColumn;
  return (
    <React.Fragment>
      <div className="tableContainer">
        <table>
          <tbody>
            {rows.map(idx => (
              <Row key={idx}
                row={idx}
                sensorsNum={sensorsNum}
                sensorsProbsNum={sensorsProbsNum}
                first_cell={FirstColumn[idx - 1]}
              ></Row>
            ))}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}
