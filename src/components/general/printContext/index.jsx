import React, { useReducer } from "react";

let reducer = (info, newInfo) => {
    return { ...info, ...newInfo };
};

const initialState ={
    serialNumber: 3,
    electrodeType: [{value:"0", label:"select"}],
    printer: [{value:"0", label:"select"}],
    inkType: [{value:"0", label:"select"}],
    concentration: [{value:"0", label:"select"}]
};

const InfoContext = React.createContext();

function InfoProvider(props) {
    const [info, setInfo] = useReducer(reducer, initialState);

    return (
        <InfoContext.Provider value={{ info, setInfo }}>
            {props.children}
        </InfoContext.Provider>
    );
}

export { InfoContext, InfoProvider };