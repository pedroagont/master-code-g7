import {
  Container, Nav,
  Navbar, NavDropdown
} from 'react-bootstrap';

function Navigation() {
  return (
    <Navbar bg="primary" expand="md" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Mi Travel App! ✈️</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#nosotros">Nosotros</Nav.Link>
            <NavDropdown title="Destinos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#cancun">Cancún</NavDropdown.Item>
              <NavDropdown.Item href="#playa-del-carmen">Playa del Carmen</NavDropdown.Item>
              <NavDropdown.Item href="#tulum">Tulum</NavDropdown.Item>
              <NavDropdown.Item href="#isla-mujeres">Isla Mujeres</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
