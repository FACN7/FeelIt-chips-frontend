import React, { useContext } from "react";
import { InfoContext, InfoProvider } from "./printContext";
// import PrintForm from "./new-print-form/print-form";

const NewPrintPage2 = () => {
  const { info, setInfo } = useContext(InfoContext);
  return (
    <div>
      <p>inf is {JSON.stringify(info)}</p>
      <a href="/"><h3>Finish</h3></a>
            <a href="/new-print"><h3>Back</h3></a>
    </div>
  );
};

export default NewPrintPage2;
