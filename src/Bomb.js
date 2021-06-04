import React, { Component } from 'react';

class Bomb extends Component {
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount 
        }
    }

    renderMessage = () => {
        return this.state.secondsLeft === 0 ? <p>Boom!</p> : <p>{this.state.secondsLeft} seconds left before I go boom!</p>
    }


    render() {
        
        return (
            <div>
            {this.renderMessage()}
            </div>
        )

    }
}

export default Bomb;