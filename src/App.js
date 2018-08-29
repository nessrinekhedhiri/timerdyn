import React, { Component } from 'react';
import Timer from  './timerdyn.js';
import './App.css';
import  Buttonapp from './reset.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state={ 
      ms:2500000, 
  
      isOn: false,
    };
    this.startTimer = this.startTimer.bind(this)
    this.resetTimer = this.resetTimer.bind(this)
    this.stopTimer  = this.stopTimer.bind(this)
   }
   
   
   startTimer() {
    this.setState({
     isOn: true,

     })
    }


    stopTimer() {
      this.setState({
        isOn: false})
    }

   


   interval= setInterval(() => {
    if(this.state.isOn===true)
     return  this.setState({
        ms: this.state.ms+1000
        })
   
    },
    1000
   )

   resetTimer() {
      this.setState({ms: 0, isOn: false})
      console.log(this.state.ms)
    }

  render() {
    return (
      <div className="App">
        <Timer ms={this.state.ms}/>
        <Buttonapp start={ this.startTimer}  stop={this.stopTimer} ison={this.state.isOn} reset={this.resetTimer} />
      </div>
    );
  }
}



export default App ;


