import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { UserUpsert } from "./components/UserUpsert";
import { UserList } from "./components/UserList";
import { Nav, Navbar } from "react-bootstrap";
import { AppNavBar } from "./common/AppNavBar";

function App() {
  return (
    <Router>
      <AppNavBar />

      <Switch>
        <Route path="/create-user">
          <UserUpsert />
        </Route>

        <Route path="/list-user">
          <UserList />
        </Route>

        <Route exact path="/">
          <UserList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;


