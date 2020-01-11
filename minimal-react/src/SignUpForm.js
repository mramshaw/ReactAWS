import React from 'react';
import './App.css';

import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';

function SignUpForm() {
  return (
    <Container>
      <Form className="Centered">
        <h2>Please enter the following fields:</h2>
        <p>&nbsp;</p>
        <FormGroup>
          <Label>First name</Label>
          <Input type="text" placeholder="Enter your first name here" />
        </FormGroup>
        <FormGroup>
          <Label>Last name</Label>
          <Input type="text" placeholder="Enter your last name here" />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input type="email" placeholder="Enter your email address here" />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input type="password" placeholder="Enter your password here" />
        </FormGroup>
        <div>&nbsp;</div>
        <Button className="btn-block" color="primary">Sign Up</Button>
      </Form>
    </Container>
  );
}

export default SignUpForm;
