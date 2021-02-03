import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import {BrowserRouter as Router} from 'react-router-dom';
import {GlobalStyle} from './GlobalStyles'
import Cover from './components/pages/Homepage/Cover';

import Navbar from './components/Navbar';


const App = () => {
  return (
    <Router>
      <GlobalStyle />
    <Layout>
      <Cover/>
    </Layout>
    </Router>
  );
}

export default App;
