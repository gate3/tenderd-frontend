import React from 'react';
import SignUpView from "./auth/SignUpView";

const AppRoutes =  ({ isUserLoggedIn:boolean = false }) => {
    return <SignUpView />
};

export default AppRoutes;
