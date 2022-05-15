import React, { Component } from 'react'

class Counter extends Component {
    state = { 
        count: 0
    };

    styles = {
        fontSize: 25,
        fontWeight: 'bold',
        fontColor: '#555'
    };

    render(){
        React.createElement('h1')
        return (
        <div>
            <span style={ this.styles } className='badge badge-primary m-2'>{this.formatCount()}</span>
            <button className='btn btn-secondary btn-small'>Increment</button>
        </div>
        );
    }

    formatCount(){
        const { count } = this.state;
        return count === 0 ? "Zero" : count
    }
}

export default Counter;