import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router";
import App from './App';

import ValueContextProvider from './store/value-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ValueContextProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ValueContextProvider>
    </React.StrictMode>
);
