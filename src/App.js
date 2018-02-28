import React, { Component } from 'react';
import './App.css';

//next step make left btn modify distance, and then btn log


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {distance: 0, btnLog : []};
    this.addDist = this.addDist.bind(this);
  }

  addDist(distance){
    this.setState({distance: this.state.distance + 1})
  }

  render() {
    const distance = this.state.distance;
    return (
      <div className = "container">
        <div className = "playerView"> Im the playerview. </div>
          <PlayerView />
        <div className = "playerInput">
          <GoLeftBtn
          onDistanceAdd = {this.addDist}
          />
         </div>
      </div>


    );
  }
}

class PlayerView extends Component{
  constructor(props){
    super(props);
  }

  const distance = this.props.distance;
  render(){
    return(

    )
  }
}

//sets playerview to "go left"
//well, updates array in playview
//the array is a state in class App

//let's start by simply updating distance
//look to TemperatureAdder for inspiration
class GoLeftBtn extends Component{
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log("trying to add 1.0 distance");
    this.props.onDistanceAdd(e.target.value);
  }

  render() {
    return (
        <button onClick = {this.handleClick}> Left</button>

    );
  }

}

class GoMidBtn extends Component{

}

class GoRightBtn extends Component{

}

class ItemBtn extends Component{

}

class StatsBtn extends Component{

}

export default App;
