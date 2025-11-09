import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import AboutUs from './components/AboutUs';
import Teachers from './components/Teachers';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <AboutUs />
      <Teachers />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
