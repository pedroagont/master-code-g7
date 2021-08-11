import {
  Button, Breadcrumb,
  Card, Col, Row
} from 'react-bootstrap';

function MainProducts() {
  return (
    <>
      <Row xs={1} sm={2} md={3} className="g-4 m-5">
        {Array.from({ length: 6 }).map((_, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src="https://picsum.photos/200" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Text className="text-end h5 fw-bold text-success">
                  $9, 990. 00 MXN
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
    </>
  );
}

export default MainProducts;
