import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Filter from './Filter';
import ToDoList from './ToDoList';
import NewTask from './NewTask';

class App extends React.Component {



  constructor() {
    super()
    this.state = {
      hideCompleted: "false",
      todos: []
    }
    this.handleFilterClick.bind(this)
    this.handleNewTask.bind(this)

  }
  


  handleFilterClick() {
    this.setState(prevState => {
      if (prevState.hideCompleted === "false"){
          return {
          hideCompleted: "true"
        }
      }
      else {
        return {
        hideCompleted: "false"
      }}
      
    })
  }

  handleNewTask(text) {
    console.log(text)
    const todos = [...this.state.todos]
    todos.push({name: text,
      completion: "false"})
    this.setState({todos})
  }

    render () {

      return (
        <div className="App">
          <h1>Welcome to my To Do list!</h1>
          <div class="border">
            <Filter state={this.state.hideCompleted} onCheckboxClick={this.handleFilterClick.bind(this)} />
            <hr></hr>
            <ToDoList todos={this.state.todos} hideCompleted={this.state.hideCompleted} />
            <hr></hr>
            <NewTask onAddClick={this.handleNewTask.bind(this)}/>
          </div>
        </div>
      )
    }
}

export default App;
