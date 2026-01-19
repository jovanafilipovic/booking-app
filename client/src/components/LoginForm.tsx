import { useState } from "react";
import { Form, ButtonToolbar, Button, Notification } from "rsuite";
import { Link, useNavigate } from "react-router-dom";
import "../styles.css";
import "../forms.css";

export const LoginForm = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (value, event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:3002/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });
      if (response.ok) {
        const data = await response.json();

        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("user", JSON.stringify(data.user));

        navigate("/"); // Redirect to homepage after successful login
      } else {
        const errorResponse = await response.json();
        setError(errorResponse.error || "Login failed");
      }
    } catch (error) {
      setError("Failed to log in");
    }
  };

  return (
    <div className="form-container">
      {error && (
        <Notification
          closable
          className="login-error-message"
          type="warning"
          header="Pogrešni kredencijali"
        />
      )}
      <Form layout="horizontal">
        <Form.Group controlId="name-6">
          <Form.ControlLabel>Korisničko ime</Form.ControlLabel>
          <Form.Control
            name="username"
            value={formValues.username}
            onChange={handleChange}
          />
          <Form.HelpText tooltip>Obavezno polje</Form.HelpText>
        </Form.Group>
        <Form.Group controlId="password-6">
          <Form.ControlLabel>Lozinka</Form.ControlLabel>
          <Form.Control
            name="password"
            type="password"
            autoComplete="off"
            value={formValues.password}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.ControlLabel className="create-accout">
            Nemate nalog? <Link to="/signup"> Registrujte se</Link>
          </Form.ControlLabel>
        </Form.Group>
        <Form.Group>
          <ButtonToolbar>
            <Button appearance="primary" onClick={handleSubmit}>
              Uloguj se
            </Button>
            <Link to="/">
              <Button appearance="default">Otkaži</Button>
            </Link>
          </ButtonToolbar>
        </Form.Group>
      </Form>
    </div>
  );
};
