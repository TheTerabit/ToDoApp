import React from 'react';
import logo from './logo.svg';
import './App.css';

class NewTask extends React.Component {

    constructor(props) {
        super()
        this.addClicked = this.addClicked.bind(this);
    }

    addClicked () {
        console.log("clicked")
        const text = document.getElementById("new_task").value
        document.getElementById("new_task").value = ""
        this.props.onAddClick(text)
    }

    render () {
        return (
            <div className="newTask">
      <input type="text" id="new_task"></input>
      <button type="button" onClick={this.addClicked}>Add</button>
    </div>
          )
    }
  
}

export default NewTask;
