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
        {/* <Todo />
        <hr />
        <AllTasks /> */}
        <ul style={{listStyleType:'none'}}>
          <li style={{display:'inline',marginLeft:'20px'}}><Link to="/newtask" style={{textDecoration:'none'}}>New Task</Link></li>
          <li style={{display:'inline',marginLeft:'20px'}}><Link to="/all-tasks" style={{textDecoration:'none'}}>All Tasks</Link></li>
          <li style={{display:'inline',marginLeft:'20px'}}><Link to="/" style={{textDecoration:'none'}}>Home</Link></li>
        </ul>
        <Switch>
          <Route exact path="/newtask" component={Todo}/>
          <Route exact path="/all-tasks" component={AllTasks} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
