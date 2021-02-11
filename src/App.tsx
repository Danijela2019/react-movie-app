//@ts-nocheck
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import {GlobalStyle} from './GlobalStyles'
import Navbar from './components/Navbar';
import Routes from './components/pages';
import Footer from './components/Footer';
import Layout from './components/Layout/Layout';
import MoviesContextProvider from './contexts/MoviesContext';
import styled from 'styled-components'

const PageContainer = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const App = () => {
  return (
      <MoviesContextProvider>
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
      </MoviesContextProvider>
  );
}

export default App;
