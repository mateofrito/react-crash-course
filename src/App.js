import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Components/layout/header'
import Todos from './Components/Todos';
import AddTodo from './Components/AddTodo';
import about from './Components/about';
//import uuid from 'uuid';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    todos: [
      
    ]
  }
  //pulls data from jsonplaceholder (this is our API)
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos/?=10')
      .then(res => this.setState({ todos: res.data }))
  }
  //toggle complete
  markComplete = (id) => {
      this.setState({ todos: this.state.todos.map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo;

       }) });

  }

  //delete todo
  delTodo = (id) => {
    //use back ticks, because you'll need to concatenate the id of the item that needs removed
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]}))

    ;
  }



//Add Todo
addTodo = (title) => {
  axios.post('https://jsonplaceholder.typicode.com/todos', {
     title,
     completed: false
  })
  
  .then(res => this.setState({ todos: [...this.state.todos, res.data]}));
  
  
}





  render() {
    return (
      <Router>
      <div className="App">
            <div className="container">
                <Header />
                <Route path="/" render={props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos todos={this.state.todos} markComplete={this.markComplete}
                  delTodo={this.delTodo}/>
                  
                  
                </React.Fragment>
                )}/>
                <Route path="/about" component={about} />
                 
                  
            
            </div>
       
        
      </div>
      </Router>
    );
  }
}

export default App;
