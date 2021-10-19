// Esta autenticacion es para saber si el usuario inicio
// seccion o no
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import PropTypes from 'prop-types';
export const PublicRoute = ({
    isAuthenticaded,
    component: Component,
    ...rest
}) => {
    return (
        <Route {...rest}
            component={(props) => (
                (!isAuthenticaded)
                    ? (<Component {...props} />)
                    : (<Redirect to="/calendar" />)
            )}
        />
    )
}
// PrivateRoute.PropTypes = {
//     isAuthenticaded: PropTypes.bool, isRequired,
//     component: PropTypes.func.isRequired,
// }