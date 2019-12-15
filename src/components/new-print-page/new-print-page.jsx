import React, { useContext } from "react";
import { InfoContext, InfoProvider } from "./printContext";
import PrintForm from "./new-print-form/print-form";

const NewPrintPage = () => {
  const { info, setInfo } = useContext(InfoContext);
  return (
    <InfoProvider>
      <PrintForm />
      <button onClick={() => setInfo(null)}>Reset Cache</button>
    </InfoProvider>
  );
};

export default NewPrintPage;
