import React from 'react'

class ContactCreator extends React.Component {
    constructor(props){
        super(props);

        this.state ={
            name: "",
            phone: ""
        }

    }

    //input box의 내용을 업데이트 하기 위함. ContactCreator의 state(name, phone)을 변경함.
    handleChange(e){
        var nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    //Contact에서 넘겨준 함수. Contact의 state.contactData에 값 추가.
    handleClick(){
        this.props.onInsert(this.state.name, this.state.phone);
        this.setState({
            name: "",
            phone: ""
        });
    }

    render() {
        return (
            <div>
                <p>
                    <input type="text"
                           name="name"
                           placeholder="name"
                           value={this.state.name}
                           onChange={this.handleChange.bind(this)}/>

                    <input type="text"
                           name="phone"
                           placeholder="phone"
                           value={this.state.phone}
                           onChange={this.handleChange.bind(this)}/>

                    <button onClick={this.handleClick.bind(this)}>Insert</button>
                </p>
            </div>
        );
    }


}

export default ContactCreator;