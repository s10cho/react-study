import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const rootElement = document.getElementById('root');
ReactDOM.render(<App headerTitle="headerTitle!!"
                     contentTitle="d"
                     contentBody="d"
/>, rootElement);


/*
* 아래 처럼 하면 typechecking시 오류 뿜
const rootElement = document.getElementById('root');
ReactDOM.render(<App headerTitle="headerTitle!!"
                     contentTitle=1             //PropTypes.string,
                     contentBody=undefined      //PropTypes.string.isRequired
/>, rootElement);
*/