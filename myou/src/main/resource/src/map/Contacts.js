import React from 'react';


class Contacts extends React.Component {
    render(){
        return(
            <div>
                <h1>Contacts</h1>
                <ul>
                    <li>{this.props.name} {this.props.tel}</li>
                </ul>
            </div>
        );
    }
}

export default Contacts;