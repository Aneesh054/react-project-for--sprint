import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="create-employee">
          <EmployeeUpsert />
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
