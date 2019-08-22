import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import conejo from '../images/conejo.jpg';


export default function Formulario(){
    return(
        <>
 
  <Image src= {conejo} roundedCircle roundedCircle/>

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
 
  <Form.Check type="checkbox" label="Checkea me" className="chack" />
</Form.Group>
<Button variant="primary" type="submit">
  Guardar
</Button>
</Form>
</>
    )
}



