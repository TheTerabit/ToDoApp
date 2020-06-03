import React from 'react';
import logo from './logo.svg';
import './App.css';
import Task from './Task';


class ToDoList extends React.Component {

  constructor(props){
    super()

  }

  render(){
    if(this.props.todos.length > 0)
    return (
      <div className="TodoList">
              {this.props.todos.map(item => (
                <Task key={item.name} name={item.name} completion={item.completion} hideCompleted={this.props.hideCompleted}/>
              ))}
      </div>
    );
    else
    return(
    <div className="TodoList">
          Nothing to do...
      </div>
    )
  }
  
}

export default ToDoList;
