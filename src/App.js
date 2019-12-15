import React from "react";
import "./App.css";
import SensorsAction from "./components/Sensors-action-page/Sensors-actions";
import Header from "./components/general/header"
function App() {
  return (
    <React.Fragment>
      <Header/>
      <SensorsAction></SensorsAction>
    </React.Fragment>
  );
}

export default App;
