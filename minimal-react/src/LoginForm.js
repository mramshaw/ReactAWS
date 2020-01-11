import React from 'react';
import './App.css';

import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';

function LoginForm() {
  return (
    <Container>
      <Form className="Centered">
        <h3>Please enter your login credentials below:</h3>
        <FormGroup>
          <Label>Email</Label>
          <Input type="email" placeholder="Enter your email address here" />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input type="password" placeholder="Enter your password here" />
        </FormGroup>
        <div>&nbsp;</div>
        <Button className="btn-block" color="primary">Log In</Button>
        <div className="mt-3">
          <a href="/sign-up">Sign Up</a>
          <span className="p-2">|</span>
          <a href="/forgot-password">Forgot Password</a>
        </div>
      </Form>
    </Container>
  );
}

export default LoginForm;
