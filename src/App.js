import React from "react";
import "./App.css";
import SinsorsAction from "./components/Sinsors-action-page/Sinsors-actions";
import Header from "./components/general/header"
function App() {
  return (
    <React.Fragment>
      <Header/>
      <SinsorsAction></SinsorsAction>
    </React.Fragment>
  );
}

export default App;
