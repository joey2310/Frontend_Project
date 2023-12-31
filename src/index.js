import React from 'react';
import { render } from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {EventProvider} from './common/EventContext/EventContext';

const root = document.getElementById("root");
render(
    <BrowserRouter>
        <EventProvider>
            <App />
        </EventProvider>
    </BrowserRouter>
    , root);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
