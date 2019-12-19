import React from "react";
import "./App.css";
import "./global.css";
import { Route, Switch } from "react-router-dom";
import PrintPage from "./components/new-print-page/new-print-page";
import PrintPage2 from "./components/new-print-page/new-print-page-2";
import { NewPrintInfoProvider } from "./components/new-print-page/printContext";

import SensorsAction from "./components/Sensors-action-page/Sensors-actions";
import Header from "./components/general/header";
import SensorsPageList from "./components/curing-pages/Sensors-list-page/Sensors-list-page";
import CurePage from "./components/curing-pages/Sensors-cure-page/Sensors-cure-page";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={SensorsAction} />
        <Route path="/Sensors" component={SensorsPageList} />
        <Route path="/cure-sensor/:serialNumber" component={CurePage} />
        <NewPrintInfoProvider>
          <Route path="/new-print" component={PrintPage} />
          <Route path="/new-print-page-2" component={PrintPage2} />
        </NewPrintInfoProvider>
      </Switch>
    </React.Fragment>
  );
}

export default App;
