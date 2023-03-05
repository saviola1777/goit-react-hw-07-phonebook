import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react'
import{store , persistor} from './Redux/store'

import { Provider } from 'react-redux'; // імпортуємо компонент провайдер який дає доступ до глобального стану і передає сторе огортуєм App імаємо глобальний доступ до store


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <App/>
    </PersistGate>
    </Provider>
  </React.StrictMode>
);
