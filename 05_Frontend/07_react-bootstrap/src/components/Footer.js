import {
  Col, Container, Row
} from 'react-bootstrap';

function Footer() {
  return (
    <footer>
      <Container fluid className="bg-primary text-light p-5">
        <Row>
          <Col>
            <p>Soy la descripción de esta súper aplicación increíble que tenemos hecha en ReactJS utilizando la librería de Bootstrap!</p>
          </Col>
          <Col>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light">Quiénes Somos</a></li>
              <li><a href="/" className="text-light">Bolsa de trabajo</a></li>
              <li><a href="/" className="text-light">Contacto</a></li>
            </ul>
          </Col>
          <Col>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light">Facebook</a></li>
              <li><a href="/" className="text-light">LinkedIn</a></li>
              <li><a href="/" className="text-light">Twitter</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
