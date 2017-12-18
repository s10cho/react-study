import React from 'react';

class State extends React.Component {

    constructor(props){
        super(props);
        this.updateNumber = this.updateNumber.bind(this);
    }

    updateNumber()
    {
        this.props.onUpdate(2);
    }

    render(){
        return  (
            <div>
                <h1>RANDOM NUMBER: { this.props.value }</h1>
                <button onClick={this.updateNumber}>Randomize</button>
            </div>
        );
    }
}

export default State;