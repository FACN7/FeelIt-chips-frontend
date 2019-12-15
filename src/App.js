import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import ChipAction from "./components/chip-action-page/chip-actions";
import Header from "./components/general/header";
import CurePageList from "./components/curing-pages/chip-list-page/chip-list-page";
import CurePage from "./components/curing-pages/chip-cure-page/chip-cure-page"
function App() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={ChipAction} />
        <Route path="/curing" component={CurePageList}/>
        <Route path="/cure-chip/:serialNumber" component={CurePage}/>
      </Switch>
    </React.Fragment>
  );
}

export default App;
