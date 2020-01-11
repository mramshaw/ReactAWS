import React from 'react';
import './App.css';

import { Container, Form } from 'reactstrap';

function NotFoundForm() {
  return (
    <Container>
      <Form className="Centered">
        <h3>404 Error</h3>
        <p>Oh no, we cannot find the page you are looking for.</p>
      </Form>
    </Container>
  );
}

export default NotFoundForm;
