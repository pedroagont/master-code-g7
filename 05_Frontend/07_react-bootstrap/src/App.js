// import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';

import {
  Navbar, Container,
  Nav, NavDropdown, Carousel,
  Row, Col, Image, Form,
  Button, InputGroup, FormControl,
  Card, Breadcrumb
} from 'react-bootstrap';

function App() {
  return (
    <>
      <header>
        <Navbar bg="primary" expand="md" variant="dark">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#inicio">Inicio</Nav.Link>
                <Nav.Link href="#nosotros">Nosotros</Nav.Link>
                <NavDropdown title="Productos" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Ropa</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Accesorios</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#contacto">Contacto</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://picsum.photos/800/450"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://picsum.photos/800/450"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://picsum.photos/800/450"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </header>

      <main>
        <Container className="m-5">
          <Row>
            <Col xs={12} sm={12} md={4} className="d-flex justify-content-center align-items-center">
              <Image src="https://picsum.photos/150" roundedCircle />
            </Col>
            <Col xs={12} sm={12} md={8} className="text-center">
              <h2 className="display-4 my-4">Hola soy el main 🫀</h2>
              <p className="lead">Soy la descripción de esta súper aplicación increíble que tenemos hecha en ReactJS utilizando la librería de Bootstrap! Me hace muy feliz poder aprender estas herramientas</p>
            </Col>
          </Row>
        </Container>

        <Form className="m-5 p-5 border border-primary">
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Nombre</InputGroup.Text>
            <FormControl
              placeholder="Nombre"
              aria-label="Nombre"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Teléfono</InputGroup.Text>
            <FormControl
              placeholder="Teléfono"
              aria-label="Teléfono"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Correo</InputGroup.Text>
            <FormControl
              placeholder="Correo"
              aria-label="Correo"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Dirección</InputGroup.Text>
            <FormControl
              placeholder="Dirección"
              aria-label="Dirección"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <InputGroup>
            <InputGroup.Text>With textarea</InputGroup.Text>
            <FormControl as="textarea" aria-label="With textarea" />
          </InputGroup>
          <Button variant="primary" type="submit" className="mt-4">
            Submit
          </Button>
        </Form>

        <Row xs={2} sm={3} md={4} className="g-4 m-5">
          {Array.from({ length: 8 }).map((_, idx) => (
            <Col key={idx}>
              <Card>
                <Card.Img variant="top" src="https://picsum.photos/200" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit longer.
                  </Card.Text>
                  <Button variant="primary">See more!</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Breadcrumb className="d-flex justify-content-end m-5">
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
            Library
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Data</Breadcrumb.Item>
        </Breadcrumb>

      </main>

      <footer>
        <Container fluid className="bg-primary text-light p-5">
          <Row>
            <Col>
              <p>Soy la descripción de esta súper aplicación increíble que tenemos hecha en ReactJS utilizando la librería de Bootstrap! Me hace muy feliz poder aprender estas herramientas</p>
            </Col>
            <Col>
              <ul style={{ listStyleType: 'none' }}>
                <li><a href="/" className="text-light">Quiénes Somos</a></li>
                <li><a href="/" className="text-light">Bolsa de trabajo</a></li>
                <li><a href="/" className="text-light">Contacto</a></li>
              </ul>
            </Col>
            <Col>
              <ul style={{ listStyleType: 'none' }}>
                <li><a href="/" className="text-light">Facebook</a></li>
                <li><a href="/" className="text-light">LinkedIn</a></li>
                <li><a href="/" className="text-light">Twitter</a></li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default App;
