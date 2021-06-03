import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AppNavBar } from "./common/AppNavBar";
import { EmployeeList } from "./components/EmployeeList";
import { Employeeupsert } from "./components/EmployeeUpsert";
function App() {
  return (
    <Router>
      <AppNavBar/>
      <Switch>
        <Route path="create-employee">
          <Employeeupsert />
        </Route>
        <Route path="/list-employee">
          <EmployeeList />
        </Route>
        <Route path="/">
          <EmployeeList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
