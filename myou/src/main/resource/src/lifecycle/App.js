import React from 'react';

class App extends React.Component {
    constructor(props){
        super(props);
        console.log("constructor");
    }

    componentWillMount(){
        console.log("componentWillMount");
    }

    componentDidMount(){
        console.log("componentDidMount");
    }

    componentWillReceiveProps(nextProps){
        console.log("componentWillReceiveProps: " + JSON.stringify(nextProps));
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate: " + JSON.stringify(nextProps) + " " + JSON.stringify(nextState));
        //return nextProps.id !== this.props.id;
        //불필요 랜더링 제거 소스
        return true;
    }

    componentWillUpdate(nextProps, nextState){
        console.log("componentWillUpdate: " + JSON.stringify(nextProps) + " " + JSON.stringify(nextState));
    }

    componentDidUpdate(prevProps, prevState){
        console.log("componentDidUpdate: " + JSON.stringify(prevProps) + " " + JSON.stringify(prevState));
    }

    componentWillUnmount(){
        console.log("componentWillUnmount");
    }

    render(){

        return (
            <div>{this.props.headerTitle}</div>
        );
    }
}


export default App;