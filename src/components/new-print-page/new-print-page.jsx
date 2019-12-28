import React from "react";
import PrintForm from "./new-print-form/print-form";
import { NewPrintInfoProvider } from "./printContext";

const NewPrintPage = () => {
  return (
    <NewPrintInfoProvider>
      <div className="Container">
        <PrintForm />
      </div>
    </NewPrintInfoProvider>
  );
};

export default NewPrintPage;
