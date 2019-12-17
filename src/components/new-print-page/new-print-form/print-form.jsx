import React, { useContext } from "react";
import DropDownList from "../../general/Drop-down-list/Drop-down-list";
import { InfoContext } from "../printContext";
import { useHistory } from "react-router-dom";

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
  const optionsList = ["electrodeType", "printer", "inkType", "concentration"];
  const makeOptionDropDownList = (option, listOfItems) => {
    return (
      <DropDownList
        selectedItem={info[option]}
        selectItem={handleChange(option)}
        items={listOfItems}
      />
    );
  };

  const [electrodeTypes, setElectrodeTypes] = React.useState([]);
  const [printers, setPrinters] = React.useState([]);
  const [inkTypes, setInkTypes] = React.useState([]);
  const [concentrations, setConcentrations] = React.useState([]);

  //fetch the input options from "GET /print-inputs-options" and put them in dropdownlists
  React.useEffect(() => {
    fetch("https://api.myjson.com/bins/ybtdw")
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
    <div>
      <p>context info is \\{JSON.stringify(info)}\\</p>
      <div className="print-form-container">
        <DropDownList
          selectedItem={info["electrodeType"]}
          selectItem={handleChange("electrodeType")}
          items={electrodeTypes}
        />
        <DropDownList selectItem={handleChange("printer")} items={printers} />
        <DropDownList selectItem={handleChange("inkType")} items={inkTypes} />
        <DropDownList
          selectItem={handleChange("concentration")}
          items={concentrations}
        />
      </div>

      <button
        onClick={() => {
          history.push("/new-print-page-2");
        }}
      >
        NEXT
      </button>
      <button
        onClick={() => {
          setInfo(null);
          history.push("/");
        }}
      >
        BACK
      </button>
    </div>
  );
};
export default PrintForm;