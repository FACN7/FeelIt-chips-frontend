import React, { useContext } from 'react';
import { InfoProvider } from "./printContext"
import PrintForm from "./new-print-form/print-form"

const NewPrintPage = ()=>{


    return (
        <InfoProvider>
        <PrintForm />
      </InfoProvider>
    );
};

export default NewPrintPage;