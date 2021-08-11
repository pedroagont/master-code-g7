import {
  Button, Col,
  Form, Row
} from 'react-bootstrap';

function SearchSection() {
  return (
    <Form className="m-5 p-3 bg-dark text-light border rounded border-primary text-center">
      <h4 className="mb-4">Soy un form para que mis usuarios ingresen datos</h4>

      <Row>
        <Col xs={12} sm={6} md={6} lg={3} className="my-1">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Select defaultValue="Origen...">
              <option disabled selected>Origen...</option>
              <option>Ciudad de México</option>
              <option>León</option>
              <option>Guadalajara</option>
              <option>Monterrey</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col xs={12} sm={6} md={6} lg={3} className="my-1">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Select defaultValue="Destino...">
              <option disabled selected>Destino...</option>
              <option>Cancún</option>
              <option>Playa del Carmen</option>
              <option>Tulum</option>
              <option>Isla Mujeres</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col xs={12} sm={6} md={6} lg={3} className="my-1">
          <Form.Control placeholder="Fecha de salida" />
        </Col>
        <Col xs={12} sm={6} md={6} lg={3} className="my-1">
          <Form.Control placeholder="Fecha de regreso" />
        </Col>
      </Row>
      <Button variant="primary" type="submit" className="px-5 py-2 mt-3">
        Buscar
      </Button>
    </Form>
  );
}

export default SearchSection;
