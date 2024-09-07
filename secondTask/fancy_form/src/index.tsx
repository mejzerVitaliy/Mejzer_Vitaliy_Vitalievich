import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/styles/index.scss';
import App from './app/App';
import { Provider } from 'react-redux';
import { store } from './app/providers/store';

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
