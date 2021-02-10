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
import Footer from './components/Footer';

import styled from 'styled-components'




const PageContainer = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentWraper = styled.div`
  flex: 1;
`;

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <PageContainer>

          <Layout>
          <Router>
            <Navbar />
            <Routes />
          </Router>
        </Layout>
      
        <Footer/>
      </PageContainer>
    </React.Fragment>
    
  );
}

export default App;
