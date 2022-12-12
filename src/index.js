import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Show from './App';
import StateClass from './Component/stateClass';
import reportWebVitals from './reportWebVitals';
import { render } from '@testing-library/react';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Show/>) ;


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
