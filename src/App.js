import React from "react";
import "./App.css";
import {Link,Route} from "react-router-dom";
import ChipAction from "./components/chip-action-page/chip-actions";
import Header from "./components/general/header"
import PrintPage from "./components/new-print-page/new-print-page"
import {InfoProvider} from "./components/new-print-page/printContext"
function App() {
  return (
    <React.Fragment>
      <InfoProvider>
      <Header/>
      <Link to='/new-print' component={PrintPage} />
    <a href='/new-print'>aaa</a>
      <ChipAction></ChipAction>
      </InfoProvider>
    </React.Fragment>
  );
}

export default App;
