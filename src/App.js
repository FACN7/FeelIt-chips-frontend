import React from "react";
import "./App.css";
import "./global.css";
import { Route, Switch } from "react-router-dom";
import PrintPage from "./components/new-print-page/new-print-page";
import PrintPage2 from "./components/new-print-page/new-print-page-2";
import { NewPrintInfoProvider } from "./components/new-print-page/printContext";
import EditDropDownListsPage from "./components/edit-drop-down-lists/edit-drop-down-lists-page";
import SensorsAction from "./components/Sensors-action-page/Sensors-actions";
import Header from "./components/general/header";
import SensorsPageList from "./components/curing-pages/Sensors-list-page/Sensors-list-page";
import CurePage from "./components/curing-pages/Sensors-cure-page/Sensors-cure-page";
import EditDropDownListsPage2 from "./components/edit-drop-down-lists/edit-drop-down-lists-page-2";
import ControlPanel from "./components/control-panel-pages/control-panel";
import Employees from "./components/control-panel-pages/employees/employees";
import ProtectedRoute from "./components/general/ProtectedRoute/ProtectedRoute";
function App() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={SensorsAction} />
        <ProtectedRoute
          path="/control-panel"
          component={ControlPanel}
          adminLevel={true}
        />
        <ProtectedRoute
          path="/employees"
          component={Employees}
          adminLevel={true}
        />
        <ProtectedRoute path="/Sensors" component={SensorsPageList} />
        <ProtectedRoute
          path="/cure-sensor/:serialNumber"
          component={CurePage}
        />
        <NewPrintInfoProvider>
          <ProtectedRoute path="/new-print" component={PrintPage} />
          <ProtectedRoute path="/new-print-page-2" component={PrintPage2} />
          <ProtectedRoute adminLevel={true}
            path="/edit-drop-down-lists-page"
            component={EditDropDownListsPage}
          />
          <ProtectedRoute adminLevel={true}
            path="/edit-drop-down-lists-page-2"
            component={EditDropDownListsPage2}
          />
        </NewPrintInfoProvider>
      </Switch>
    </React.Fragment>
  );
}

export default App;
