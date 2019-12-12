import React, { useReducer } from "react";

let reducer = (info, newInfo) => {
    return { ...info, ...newInfo };
};

const initialState ={
    serialNumber: 3,
    electrodeType: "",
    printer: "",
    inkType: "",
    concentration: ""
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