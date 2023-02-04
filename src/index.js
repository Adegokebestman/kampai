import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { ContextProvider } from './contexts/ContextProvider';
import CartState from './contexts/Cart/CartState';

ReactDOM.render(

<ContextProvider>
<CartState>
<App />
</CartState>
</ContextProvider>
, document.getElementById('root'));

