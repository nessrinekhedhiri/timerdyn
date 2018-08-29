import React, { Component } from 'react'
import './timerdyn.css';

 
class Timer extends Component {
    constructor(props) {
        super(props);
        this.convert=this.convert.bind(this);
    }
    convert()
    {
       let ms=this.props.ms
       let heure=(Math.floor(((ms/1000)/60)/60).toString()).padStart(2, "0");
       let minute=(Math.floor(((ms/1000)/60)%60).toString()).padStart(2, "0");
       let  seconde=(Math.floor((ms/1000)%60).toString()).padStart(2, "0");
       return (heure + ':'+ minute + ':'+ seconde)
   
   }
    render() {
        return (
            <div className="timer">
       <div className="number"> 
             {this.convert(this.props.ms)} 
             
          </div>

      <div className="type">      
                <div className="hour">  Heure</div>
                <div className="minute">Minute </div>
                <div className="second"> Seconde</div>
  </div>
   </div>
            
        );
    }
}

export default Timer ;

