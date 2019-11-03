import React, { Component } from 'react'
import "./App.css"
import RepoList from './components/ReposList';
import Header from './components/Header';
import Footer from './components/Footer';

export default class App extends Component {
 
  render() {

    return(
          <div className="App">
            <Header/>
            <RepoList/>
            <Footer/>
          </div>
        )
  
  }
}

