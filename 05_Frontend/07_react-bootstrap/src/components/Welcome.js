import {
  Col, Container,
  Image, Row
} from 'react-bootstrap';

function Welcome() {
  return (
    <Container className="m-5">
      <Row>
        <Col xs={9} sm={12} md={4} lg={4} xl={3}  className="d-flex justify-content-center align-items-center">
          <Image src="https://picsum.photos/200" roundedCircle />
        </Col>
        <Col xs={9} sm={12} md={7} lg={7} xl={9}  className="text-left">
          <h2 className="display-4 my-4">Hola soy el main 🫀</h2>
          <p className="lead">Soy la descripción de esta súper aplicación increíble que tenemos hecha en ReactJS utilizando la librería de Bootstrap!</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Welcome;
