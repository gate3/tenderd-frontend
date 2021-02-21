import React from 'react';
import { Layout } from 'antd';
import './App.css';
import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import AppRoutes from "./components/AppRoutes";

// 🚀 - To keep the AppJs clean, the routes are declared elsewhere and used as a component here

function App() {
  return (
      <Router>
        <Layout style={{ height: '100vh' }}>
          <Switch>

          <AppRoutes />

          </Switch>
        </Layout>
      </Router>
  )
}

export default App;
