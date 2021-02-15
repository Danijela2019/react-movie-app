//@ts-nocheck
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import {GlobalStyle} from './GlobalStyles'
import Navbar from './components/Navbar';
import Routes from './components/pages';
import Footer from './components/Footer';
import Layout from './components/Layout/Layout';
import styled from 'styled-components'
import MoviesContextProvider from './contexts/MoviesContext'

const PageContainer = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const App = () => {
  return (
      <MoviesContextProvider >
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

