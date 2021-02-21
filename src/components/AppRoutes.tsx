import React from 'react';
import LoginView from "./auth/LoginView";

const AppRoutes =  ({ isUserLoggedIn:boolean = false }) => {
    return <LoginView />
};

export default AppRoutes;
