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
        <Layout>
          <Switch>

          <AppRoutes />

          </Switch>
        </Layout>
      </Router>
  )
}

export default App;
