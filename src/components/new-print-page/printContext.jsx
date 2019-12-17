import React, { useReducer, useEffect } from "react";
let currentDate = new Date();
const electrodeBatchDate= ""+currentDate.getMonth()+((currentDate.getFullYear()).toString().slice(-2));
let reducer = (info, newInfo) => {
  if (newInfo === null) {
    localStorage.removeItem("info");
    return initialState;
  }
  return { ...info, ...newInfo };
};

const initialState = {
    electrodeType: null,
    printer: null,
    inkType: null,
    concentration: null,
    electrodeBatchDate
};

const InfoContext = React.createContext();
const localState = JSON.parse(localStorage.getItem("info"));

function NewPrintInfoProvider(props) {
    const [info, setInfo] = useReducer(reducer, localState || initialState);
    useEffect(() => {
      localStorage.setItem("info", JSON.stringify(info));
    }, [info]);
    
    return (
        <InfoContext.Provider value={{ info, setInfo }}>
      {props.children}
    </InfoContext.Provider>
  );
}

export { InfoContext, NewPrintInfoProvider };
