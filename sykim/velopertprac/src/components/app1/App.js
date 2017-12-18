import React from 'react';
import Header from './Header'
import Content from './Content'
import StateExample from "../state/StateExample";
import RandomPrepareComponent from "../random/RandomPrepareComponent";


//이 주석은 여기서
class App extends React.Component { //모든 React Component 은 첫 문자가 대문자인 CamelCase 로 작성됩니다.
    //이것도 여기서
    buttonClick(){
        //주석
        alert("클릭클릭~~~");
    }


    render(){
        // 주석
        let testLet = 'testLet';
        const testConst = 'testConst';
        var testVar = 'testVar';

        //
        /* 리액트에서 인라인 스타일 쓸때는 string이 아닌 camelCase*/
        let testStyle = {
            color: 'black',
            backgroundColor : 'blue'
        }

        return (
            //주석
            <div> {/*이 div가 container element인데, 이 안에서는 주석을 이렇게 써야함! 밖에는 그냥 일반 js 주석처럼 사용하면 됨.*/}
                {/*주석*/}
                <Header title={this.props.headerTitle}/>

                <h1>Hello React Skeleton</h1>
                <h2>이렇게 div로 감싸야 함</h2>
                <p>testLet: {testLet}</p>
                <p>testConst: {testConst}</p>
                <p>testVar: {testVar}</p>
                <button onClick={this.buttonClick}>클릭클릭</button>


                {/*  if else 안됨 3항 연산자 사용가능*/}
                <p style={testStyle}>{1==1 ? "True" : "False"}</p>
                <Content title={this.props.contentTitle} body={this.props.contentBody}/>

                <StateExample/>

                <RandomPrepareComponent/>

            {/* 주석 */}
            </div>
    //        주석
    );
    }
}

App.defaultProps = {
    headerTitle: "default header title!",
    contentTitle: "default content title!!",
    contentBody: undefined
}


export default App;