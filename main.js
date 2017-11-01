import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Form from './src/Components/Form';


ReactDOM.render(<BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('app'));


