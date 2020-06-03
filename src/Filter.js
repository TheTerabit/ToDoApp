import React from 'react';
import logo from './logo.svg';
import './App.css';

class Filter extends React.Component {

    constructor(props) {
        super()
    }

    printer () {
        console.log("clicked")
    }

    render () {
        return (
            <div className="filter">
                <input type="checkbox" onClick={this.props.onCheckboxClick.bind(this)} ></input>
                Hide completed
            </div>
          )
    }
  
}

export default Filter;
