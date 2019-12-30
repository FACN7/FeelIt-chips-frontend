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
import NewEmployee from "./components/control-panel-pages/employees/new-employee/new-employee";
import ProtectedRoute from "./components/general/ProtectedRoute/ProtectedRoute";
import SignUp from "./components/sign-up/sign-up";
import SignInForm from "./components/sign-in/sign-in-form";
import { SensorCuringInfoProvider } from "./components/curing-pages/sensorCuringContext";

function App() {
  const [user, setUser] = React.useState(null);

  return (
    <React.Fragment>
      <Header data={user} />
      <Switch>
        <Route exact path="/sign-in" component={SignInForm} />
        <Route path="/sign-up/:token" component={SignUp} />

        <ProtectedRoute
          setUser={setUser}
          exact
          path="/"
          component={SensorsAction}
        />
        <ProtectedRoute
          setUser={setUser}
          path="/control-panel"
          component={ControlPanel}
          adminLevel={true}
        />
        <ProtectedRoute
          setUser={setUser}
          path="/employees"
          component={Employees}
          adminLevel={true}
        />
        <ProtectedRoute
          setUser={setUser}
          path="/new-employee"
          component={NewEmployee}
          adminLevel={true}
        />

        <NewPrintInfoProvider>
          <Switch>
            <ProtectedRoute
              setUser={setUser}
              path="/Sensors"
              component={SensorsPageList}
            />
            <ProtectedRoute
              setUser={setUser}
              path="/cure-sensor/:serialNumber"
              component={CurePage}
            />

            <ProtectedRoute
              setUser={setUser}
              path="/new-print-page-2"
              component={PrintPage2}
            />
            <ProtectedRoute
              setUser={setUser}
              path="/new-print"
              component={PrintPage}
            />
            <ProtectedRoute
              setUser={setUser}
              adminLevel={true}
              path="/edit-drop-down-lists-page"
              component={EditDropDownListsPage}
            />
            <ProtectedRoute
              setUser={setUser}
              adminLevel={true}
              path="/edit-drop-down-lists-page-2"
              component={EditDropDownListsPage2}
            />
          </Switch>
        </NewPrintInfoProvider>
      </Switch>
    </React.Fragment>
  );
}

export default App;
