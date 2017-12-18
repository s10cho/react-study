import React from 'react';

class RandomNumber extends React.Component {
    updateValue() {
        let value = Math.round(Math.random() * 100);
        this.props.onUpdate(value);
    }

    constructor(props) {
        super(props);
        this.updateValue = this.updateValue.bind(this)
    }

    render() {
        return (
            <div>
                <h4>RANDOM NUMBER: {this.props.number}</h4>
                <button onClick={this.updateValue}> Randomize</button>
                {/*<button onClick={this.updateValue.bind(this)}> Randomize</button>*/}
            </div>
        );
    }
}


export default RandomNumber;