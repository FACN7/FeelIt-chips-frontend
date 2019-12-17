import React, { useContext } from "react";
import {useHistory} from "react-router-dom";
import { InfoContext } from "./printContext";
// import PrintForm from "./new-print-form/print-form";

const NewPrintPage2 = () => {
  const { info,setInfo } = useContext(InfoContext);
  const history = useHistory();
  return (
    <div>
      <p>inf is {JSON.stringify(info)}</p>

      

      <button
        onClick={() => {
          setInfo(null)
          history.push("/");
        }}
      >
        FINISH
      </button>
      <button
        onClick={() => {
          history.push("/new-print");
        }}
      >
        BACK
      </button>


    </div>
  );
};

export default NewPrintPage2;
