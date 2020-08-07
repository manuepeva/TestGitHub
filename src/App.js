import React from 'react';
import styled from 'styled-components';
import './components/styles/styles.css';
import Header from './components/header/Header';
import Middlepage from './components/middlepage/Middlepage';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="container">
      <Header primary={true} />
      <Middlepage />
      <Footer />
    </div>
  );
}

export default App;
