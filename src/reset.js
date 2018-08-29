import React, { Component } from 'react'
import './reset.css';
class Buttonapp extends Component {
    constructor(props) {
    super(props);
    this.state = {  };
    this.change = this.change.bind(this)
    }
    change()
    {
        if(!this.props.ison)
        return this.props.start()
        this.props.stop()
        
    }
    render() {
        return (
            <div className="btn">
                <button onClick={this.props.reset}>RESET</button> 
                <button onClick={this.change} >StART</button> 
            </div>
        )
    }
}

export default Buttonapp