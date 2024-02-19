import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import LearnMore from './components/LearnMore';
import HotelsHomes from './components/HotelsTop';
import BodyPart from './components/BodyPart';
import Footer from './components/Footer';
import SearchTitle from './components/SearchTitle';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <LearnMore />
        <SearchTitle />
        {/* <HotelsHomes /> */}
        <BodyPart />
        <Footer />
      </div>
    );
  }
}

export default App;
