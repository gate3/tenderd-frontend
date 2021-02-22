import React, {useEffect, useState} from 'react';
import { Layout } from 'antd';
import './App.css';
import {
  // BrowserRouter as Router,
  Switch,
  Router
} from 'react-router-dom';
import AppRoutes from "./components/AppRoutes";
import history from './utils/history';
import LocalStorageHelper from './services/localstorage-helper';

// 🚀 - To keep the AppJs clean, the routes are declared elsewhere and used as a component here

function App() {
    const [isLoggedIn, setLoggedInState] = useState(false);

    useEffect(() => {
        const userData = LocalStorageHelper.getItem(LocalStorageHelper.localStoreKeys.userProfile)
        if (userData) {
            setLoggedInState(true)
        }else{
            setLoggedInState(false)
        }
    }, [])
    return (
        <Router history={history}>
            <Layout style={{ height: '100vh' }}>
                <Switch>

                    {
                        AppRoutes({ isUserLoggedIn: isLoggedIn })
                    }

                </Switch>
            </Layout>
        </Router>
    )
}

export default App;
