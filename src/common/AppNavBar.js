import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export function AppNavBar() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand as={Link} to="/">
        User Details
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/create-employee">
            Create user
          </Nav.Link>
          <Nav.Link as={Link} to="/list-employee">
            List of Users
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
