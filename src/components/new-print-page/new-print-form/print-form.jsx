import React, { useContext } from "react";
import DropDownList from "../../general/dropDownList";
import { InfoContext, InfoProvider } from "../../general/printContext"
const PrintForm = () => {

    const { info, setInfo } = useContext(InfoContext)
    // const [electrodeTypes, setElectrodeTypes] = React.useState(info.electrodeType.map(({ value, label }) => { return ({ value, text: label }) }));
    // const [printers, setPrinters] = React.useState(info.printer.map(({ value, label }) => { return ({ value, text: label }) }));

    // fetch("https://api.myjson.com/bins/vty1o").then(res => res.json()).then(data => {
    //     return data.electrodeType.map(({ value, label }) => { return ({ value, text: label }) });

    // }).then(electrodeTypeList => setElectrodeTypes(electrodeTypeList)).catch(err => console.log(err));

    return (
        <div>
          
                {/* <p>some data from context {info.serialNumber} printer:{info.printer[0]||""}</p> */}
                <div className="print-form-container" >
                    <DropDownList items={info.electrodeType.map(({ value, label }) => { return ({ value, text: label }) })} />
                    <DropDownList items={info.printer.map(({ value, label }) => { return ({ value, text: label }) })} />
                </div>

        </div>
    );
};
export default PrintForm;