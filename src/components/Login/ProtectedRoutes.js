import React from 'react'
import { Redirect, Route } from 'react-router'
import auth from './auth'

export const ProtectedRoutes = ({ component: Components, ...rest }) => {

    return (
        <Route
            {...rest}
            render={props => {
                if (auth.isAuthenticated()) {
                    return <Components {...props} />
                } else {
                    return <Redirect to={
                        {
                            pathname: "/",
                            state: {
                                from: props.location
                            }
                        }
                    } />
                }
            }}
        />
    )
}
