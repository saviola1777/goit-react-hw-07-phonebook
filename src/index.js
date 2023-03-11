import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';
import{store } from './Redux/store'

import { Provider } from 'react-redux'; // імпортуємо компонент провайдер який дає доступ до глобального стану і передає сторе огортуєм App імаємо глобальний доступ до store


ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <Provider store={store}>
    <App/>
    </Provider>
 // </React.StrictMode>
);
