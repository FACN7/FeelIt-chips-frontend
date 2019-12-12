import React from "react";
import "./App.css";
import ChipAction from "./components/chip-action-page/chip-actions";
import Header from "./components/general/header"
function App() {
  return (
    <React.Fragment>
      <Header/>
      <ChipAction></ChipAction>
    </React.Fragment>
  );
}

export default App;
