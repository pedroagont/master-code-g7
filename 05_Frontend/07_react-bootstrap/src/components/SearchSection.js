import {
  Button, Form,
  FormControl, InputGroup
} from 'react-bootstrap';

function SearchSection() {
  return (
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
  );
}

export default SearchSection;
