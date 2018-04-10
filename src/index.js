import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

render((
    <BrowserRouter>
        <App/>
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
