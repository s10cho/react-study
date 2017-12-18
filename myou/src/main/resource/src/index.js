import React from 'react';
import ReactDOM from 'react-dom';
import App from './lifecycle/App';
//import App from './map/App';
//import App from './components/App';

const rootElement = document.getElementById('root');
ReactDOM.render(<App headerTitle = "Welcome!"
                     contentTitle = "Stranger,"
                     contentBody = "Welcome to example app"/>, rootElement);