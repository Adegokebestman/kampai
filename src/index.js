import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { ContextProvider } from './contexts/ContextProvider';
import CartState from './contexts/Cart/CartState';
import {  AuthProvider  } from './contexts/AuthProvider';

ReactDOM.render(

<ContextProvider>
<AuthProvider>
<CartState>
<App />
</CartState>
</AuthProvider>
</ContextProvider>
, document.getElementById('root'));

