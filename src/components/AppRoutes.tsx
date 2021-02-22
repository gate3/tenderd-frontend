import React from 'react';
import {
    Route
} from "react-router-dom";
import SignUpView from "./auth/SignUpView";
import LoginView from "./auth/LoginView";
import RequestsView from "./requests/RequestsView";
import CreateRequest from "./requests/CreateRequest";

const AppRoutes =  ({ isUserLoggedIn = false }) => {
    console.log({isUserLoggedIn})
    if (!isUserLoggedIn) {
        return (
            <>
                <Route exact path="/register" render={() => <SignUpView /> }/>
                <Route exact path="/" render={() => <LoginView /> }/>
            </>
        )
    }
    return (
        <>
            <Route exact path="/requests/create" render={() => <CreateRequest/> } />
            <Route exact path="/" render={() => <RequestsView/> } />
        </>
    )
};

export default AppRoutes;
