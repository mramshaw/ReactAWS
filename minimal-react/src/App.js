import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ForgotPasswordForm from './ForgotPasswordForm';
import Header from './Header';
import LoginForm from './LoginForm';
import NotFoundForm from './NotFoundForm';
import SignUpForm from './SignUpForm';

const App = () => (
    <BrowserRouter>
        <main>
            <Header />
            <Switch>
                <Route exact path="/" component={LoginForm} />
                <Route path="/forgot-password" component={ForgotPasswordForm} />
                <Route path="/sign-up" component={SignUpForm} />
                <Route component={NotFoundForm} />
            </Switch>
        </main>
    </BrowserRouter>
);

export default App;
