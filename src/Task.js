import React from 'react';
import logo from './logo.svg';
import './App.css';

class Task extends React.Component {

  constructor(props){
    super()
    this.state = {
      completed: "false"
    }
    this.changeCompletion.bind(this)

  }


  changeCompletion() {
    console.log("change")
    this.setState(prevState => {
      if (prevState.completed === "false"){
          return {
          completed: "true"
        }
      }
      else {
        return {
        completed: "false"
      }}
      
    })
  }

  render() {


    if((this.props.hideCompleted==="true") && (this.state.completed==="true"))
    return (
      <div className="task">
      </div>
    );
    else  if(this.state.completed==="true")
    return (
      <div className="task_done">
        <input id={this.props.name} type="checkbox" checked onChange={this.changeCompletion.bind(this)} ></input>
        {this.props.name}
      </div>
    );
    else 
    return (
      <div className="task">
        <input id={this.props.name} type="checkbox" unchecked onChange={this.changeCompletion.bind(this)} ></input>
        {this.props.name}
      </div>
    );
  }
  
}

export default Task;
