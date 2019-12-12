import React, { useContext } from "react";
import DropDownList from "../../general/dropDownList";
import { InfoContext } from "../printContext"
const PrintForm = () => {
    const convertToDropDownListItems = (arr) => {
        return arr.map(({ value, label }) => { return ({ value, text: label }) });
    };

    const handleChange = key => newValue => {
        setInfo({ [key]: newValue });
    };

    const { info, setInfo } = useContext(InfoContext)
    const [electrodeTypes, setElectrodeTypes] = React.useState([]);
    const [printers, setPrinters] = React.useState([]);
    const [inkTypes, setInkTypes] = React.useState([]);
    const [concentrations, setConcentrations] = React.useState([]);

    //fetch the input options from "GET /print-inputs-options" and put them in dropdownlists
    React.useEffect(() => {
        fetch("https://api.myjson.com/bins/ybtdw").then(res => res.json()).then(data => {
            setPrinters(convertToDropDownListItems(data.printer));
            setElectrodeTypes(convertToDropDownListItems(data.electrodeType))
            setInkTypes(convertToDropDownListItems(data.inkType))
            setConcentrations(convertToDropDownListItems(data.concentration))
        }).catch(err => console.log(err));
    }, []);

    return (
        <div>
            <p>context info is \\{JSON.stringify(info)}\\</p>
            <div className="print-form-container" >
                <DropDownList selectItem={handleChange("electrodeType")} items={electrodeTypes} />
                <DropDownList selectItem={handleChange("printer")} items={printers} />
                <DropDownList selectItem={handleChange("inkType")} items={inkTypes} />
                <DropDownList selectItem={handleChange("concentration")} items={concentrations} />
            </div>
        </div>
    );
};
export default PrintForm;