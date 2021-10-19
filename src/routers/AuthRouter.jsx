import React from 'react';
import { LoginScreen } from '../components/Auth/LoginScreen';
import { Switch, Route, Redirect } from 'react-router-dom';
export const AuthRouter = () => {
    return (
        <div className="auth__main">
                <Switch>
                    <Route
                        exact
                        path='/auth/login'
                        component={LoginScreen}
                    />
                    <Redirect to='/auth/login' />
                </Switch>
        </div>
    )
}