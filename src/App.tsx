import React from 'react';
import Layout from './components/Layout/Layout';
import {BrowserRouter as Router} from 'react-router-dom';
import {GlobalStyle} from './GlobalStyles'
import Home from './components/pages/Homepage';
import { MoviePage } from './components/pages/Moviepage';
import SearchedItems from './components/pages/SearchedItems';
import Login from './components/pages/Login'
import Navbar from './components/Navbar';
import Routes from './components/pages';


const App = () => {
  return (
    <Router>
    <GlobalStyle />
      <Layout>
        <Router>
          <Navbar />
          <Routes />
        </Router>
      </Layout>
    </Router>
  );
}

export default App;
