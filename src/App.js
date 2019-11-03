import React, { Component } from 'react'
import "./App.css"
import RepoList from './components/ReposList';
import Header from './components/Header';

export default class App extends Component {
 
  render() {

    return(
          <div className="App">
            <Header/>
            <RepoList/>
          </div>
        )
  
  }
}

