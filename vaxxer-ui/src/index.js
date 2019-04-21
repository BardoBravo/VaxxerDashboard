import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Header from './components/Header';
import Content from './components/Content';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<NavBar />, document.getElementById('navbar'));
ReactDOM.render(<Content />, document.getElementById('content'));
ReactDOM.render(<Footer />, document.getElementById('footer'));

// If you want your app to work offline and load faster, you can change

// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
