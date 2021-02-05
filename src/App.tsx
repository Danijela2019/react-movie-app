import React from 'react';
import Layout from './components/Layout/Layout';
import {BrowserRouter as Router} from 'react-router-dom';
import {GlobalStyle} from './GlobalStyles'
import Home from './components/pages/Homepage';


const App = () => {
  return (
    <Router>
    <GlobalStyle />
      <Layout>
        <Home/>
      </Layout>
    </Router>
  );
}

export default App;
