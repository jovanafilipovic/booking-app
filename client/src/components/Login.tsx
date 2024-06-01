import React from "react";
import { Form, ButtonToolbar, Button, Schema } from "rsuite";
import "../styles.css";

const model = Schema.Model({
  name: Schema.Types.StringType().isRequired("This field is required."),
});

export const Login = () => {
  return (
    <Form layout="horizontal" model={model}>
      <Form.Group controlId="name-6">
        <Form.ControlLabel>Korisničko ime</Form.ControlLabel>
        <Form.Control name="name" />
        <Form.HelpText>Obavezno polje</Form.HelpText>
      </Form.Group>
      <Form.Group controlId="password-6">
        <Form.ControlLabel>Lozinka</Form.ControlLabel>
        <Form.Control name="password" type="password" autoComplete="off" />
      </Form.Group>
      <Form.Group>
        <ButtonToolbar>
          <Button appearance="primary">Uloguj se</Button>
          <Button appearance="default">Otkaži</Button>
        </ButtonToolbar>
      </Form.Group>
    </Form>
  );
};
