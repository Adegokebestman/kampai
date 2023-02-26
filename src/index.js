import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { ContextProvider } from './contexts/ContextProvider';
import CartState from './contexts/Cart/CartState';
import {  AuthProvider  } from './contexts/AuthProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
<AuthProvider>

<ContextProvider>
<CartState>
<App />
</CartState>
</ContextProvider>
</AuthProvider>
</BrowserRouter>

, document.getElementById('root'));

