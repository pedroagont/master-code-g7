import {
  Col, Container,
  Image, Row
} from 'react-bootstrap';

function Welcome() {
  return (
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
  );
}

export default Welcome;
