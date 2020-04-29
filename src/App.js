import React, { Component } from 'react';
import './App.css';


import Todo from './containers/Todo/todo';
import AllTasks from './containers/AllTasks/allTasks';
import Home from './components/Home/home';
import{Link,Route,Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Home />
      </div>
    );
  }
}

export default App;
