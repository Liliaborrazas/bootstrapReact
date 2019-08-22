import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Formulario(){
    return(
<Form>
<Form.Group controlId="formBasicEmail">
  <Form.Label>Email</Form.Label>
  <Form.Control type="email" placeholder="Enter email" required className="email" />
  <Form.Text className="text-muted">
    Pon el email
  </Form.Text>
</Form.Group>
<Form.Group controlId="formBasicPassword">
  <Form.Label>Contraseña</Form.Label>
  <Form.Control type="password" placeholder="Password" className="contraseña" required />
  <Form.Text className="text-muted">
    Pon la contraseña
  </Form.Text>
</Form.Group>
<Form.Group controlId="formBasicChecbox">
  <Form.Check type="checkbox" label="Checkea me" />
</Form.Group>
<Button variant="primary" type="submit">
  Guardar
</Button>
</Form>
    )
}



