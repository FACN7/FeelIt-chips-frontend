import React, { useReducer, useEffect } from "react";

const reducer = (info, newInfo) => {
  if (newInfo === null) {
    localStorage.removeItem("sensorInfo");
    return initialState;
  }
  return { ...info, ...newInfo };
};

const initialState = {
  _id: -1
};

const InfoContext = React.createContext();
const localState = JSON.parse(localStorage.getItem("sensorInfo"));

function SensorCuringInfoProvider(props) {
  const [info, setInfo] = useReducer(reducer, localState || initialState);
  useEffect(() => {
    localStorage.setItem("sensorInfo", JSON.stringify(info));
  }, [info]);

  return (
    <InfoContext.Provider value={{ info, setInfo }}>
      {props.children}
    </InfoContext.Provider>
  );
}

export { InfoContext, SensorCuringInfoProvider };
