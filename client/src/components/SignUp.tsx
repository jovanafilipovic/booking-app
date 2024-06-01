import React from "react";
import { Form, ButtonToolbar, Button } from "rsuite";
import "../styles.css";

export const SignUp = () => {
  return (
    <Form layout="horizontal">
      <Form.Group controlId="name-6">
        <Form.ControlLabel>Korisničko ime</Form.ControlLabel>
        <Form.Control name="name" />
        <Form.HelpText>Obavezno polje</Form.HelpText>
      </Form.Group>
      <Form.Group controlId="email-6">
        <Form.ControlLabel>Email</Form.ControlLabel>
        <Form.Control name="email" type="email" />
        <Form.HelpText tooltip>Obavezno polje</Form.HelpText>
      </Form.Group>
      <Form.Group controlId="password-6">
        <Form.ControlLabel>Lozinka</Form.ControlLabel>
        <Form.Control name="password" type="password" autoComplete="off" />
      </Form.Group>
      <Form.Group>
        <ButtonToolbar>
          <Button appearance="primary">Registruj se</Button>
        </ButtonToolbar>
      </Form.Group>
    </Form>
  );
};
