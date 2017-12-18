import React from 'react';

class StateExample extends React.Component{


    //생성자에서 state에 초기값 설정. this.state= {...}
    constructor(props){
        super(props)

        this.state = {
            header: 'init header',
            content: 'content initial state'
        };


        //바인딩을 container element안에서 해줘도 됨. 생성자에서 하는게 더 나으려나?!?!?!
        this.updateHeader = this.updateHeader.bind(this);
        this.resetHeader = this.resetHeader.bind(this);
    }


    // this.setState({...});로 업데이
    updateHeader(text){
        this.setState({
            header: 'chaned header!'
        });
    }

    resetHeader(text){
        this.setState({
            header: 'reset header'
        });
    }




    render(){
        return(
            <div>
                <p>버튼 클릭 시 헤더 변경 예제</p>

                {/*렌더링 할때는 this.state.stateName*/}
                <h3>{this.state.header}</h3>
                <p>{this.state.content}</p>

                {/*setState()를 사용할때는 꼭 bind 해주어야 한다고 함. ES6 Class에서는 auto binding이 안된다고 함.*/}
                {/*<button onClick={this.updateHeader.bind(this)}>Update</button>*/}
                {/*<button onClick={this.resetHeader.bind(this)}>Reset</button>*/}


                {/* 컴포넌트의 함수 바인딩을 생성자에서 해주면 이렇게 쓸 수 있는 듯 */}
                <button onClick={this.updateHeader}>Update</button>
                <button onClick={this.resetHeader}>Reset</button>


            </div>
        );
    }
}

export default StateExample;