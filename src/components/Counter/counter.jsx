import React, { Component } from 'react'

class Counter extends Component {

    render(){
        return (
        <div>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={() => this.props.onIncrement(this.props.counter)} className='button'>+</button>
            <button onClick={() => this.props.onDecrement(this.props.counter)} className='button-decrement'>-</button>
            <button onClick={() => this.props.onDelete(this.props.counter.id)}>Delete Row</button>
        </div>
        );
    };

    getBadgeClasses() {
        let classes = "";
        classes += (this.props.counter.value === 0 ? "badge" : "badge-warning");
        return classes;
    }

    formatCount(){
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value;
    }

    handleDecrement = () =>{
        this.setState({ value: this.props.value - 1 });
    }
}

export default Counter;