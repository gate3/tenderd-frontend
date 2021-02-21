import React from 'react';
import AuthLayout from "./layouts/AuthLayout";

const AppRoutes =  ({ isUserLoggedIn:boolean = false }) => {
    return <AuthLayout/>
};

export default AppRoutes;
