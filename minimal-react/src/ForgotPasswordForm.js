import React from 'react';
import './App.css';

import { Button, Container, Form, FormGroup, Input } from 'reactstrap';

function ForgotPasswordForm() {
  return (
    <Container>
      <Form className="Centered">
        <h3>Please enter the email address to which you wish to have your password sent.</h3>
        <p>&nbsp;</p>
        <FormGroup>
          <Input type="email" placeholder="Enter the email address to send your password to here" />
        </FormGroup>
        <div>&nbsp;</div>
        <Button className="btn-block" color="primary">Submit</Button>
      </Form>
    </Container>
  );
}

export default ForgotPasswordForm;
