import React, { useContext } from "react";
import DropDownList from "../../general/Drop-down-list/Drop-down-list";
import { InfoContext } from "../printContext";
import { useHistory } from "react-router-dom";
import endpointUrl from "../../../config";

const PrintForm = () => {
  const history = useHistory();
  const { info, setInfo } = useContext(InfoContext);
  const convertToDropDownListItems = arr => {
    return arr.map(({ value, label }) => {
      return { value, text: label };
    });
  };

  const handleChange = key => newValue => {
    setInfo({ [key]: newValue });
  };

  const [electrodeTypes, setElectrodeTypes] = React.useState([]);
  const [printers, setPrinters] = React.useState([]);
  const [inkTypes, setInkTypes] = React.useState([]);
  const [concentrations, setConcentrations] = React.useState([]);

  React.useEffect(() => {
    fetch(`${endpointUrl}/print-inputs-options`)
      .then(res => res.json())
      .then(data => {
        setPrinters(convertToDropDownListItems(data.printer));
        setElectrodeTypes(convertToDropDownListItems(data.electrodeType));
        setInkTypes(convertToDropDownListItems(data.inkType));
        setConcentrations(convertToDropDownListItems(data.concentration));
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <React.Fragment>
      <div className="print-form-container">

        <div className="label"><label>Electrode Type</label><DropDownList selectItem={handleChange("electrodeType")} items={electrodeTypes} /></div>
        <div className="label"><label>Printer       </label><DropDownList selectItem={handleChange("printer")} items={printers} /></div>
        <div className="label"><label>Ink Type      </label><DropDownList selectItem={handleChange("inkType")} items={inkTypes} /></div>
        <div className="label"><label>Concentration </label><DropDownList selectItem={handleChange("concentration")} items={concentrations} /></div>
        <div className="label"><label>Batch Date :  </label> {info.electrodeBatchDate}</div>
      </div>
      <div className="navigationContainer">
        <button
          onClick={() => {
            setInfo(null);
            history.push("/");
          }}
        >
          BACK
        </button>
        <button
          onClick={() => {
            history.push("/new-print-page-2");
          }}
        >
          NEXT
        </button>
      </div>
    </React.Fragment>
  );
};
export default PrintForm;
