import React from 'react';
import RandomNumber from "./RandomNumber";

class RandomPrepareComponent extends React.Component{

    constructor(props){
        //블로그에서는 습관적으로 작성하는 부분이라고 함. "constructor에서 this.props 에 접근할 필요가 없다면 그냥 super() 만 작성하셔도 무방합니다." 라고 함.
        super(props)


        this.state = {
            value:  Math.round(Math.random()*100)
        }

        //auto binding이 안되므로 함수 바인딩 해줌. 생성자에서 바인딩!!
        this.updateValue = this.updateValue.bind(this);
    }

    updateValue(randomValue){
        //state
        this.setState({
            value: randomValue
        });
    }

    render(){
        return(
            // function을 prop으로 넘길 때, 둥근괄호를 붙이면 에러남!!!
            // container element 밖이므로 주석이 슬래시 두 개
            <div>
                {/* container element 안이어서 이렇게 주석 적어야 함*/}
                <RandomNumber number={this.state.value} onUpdate={this.updateValue}/>
            </div>
        );
    }
}

export default RandomPrepareComponent;