import rootReducer from './root-reducer'
import { configureStore } from "@reduxjs/toolkit";  // експортує  футкцію яка буде огортати стор
import {persistStore,FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';     




export const store = configureStore({
   reducer: rootReducer,
   middleware: getDefaultMiddleware =>
     getDefaultMiddleware({
       serializableCheck: {
         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
       },
     }),
 });

export const persistor = persistStore(store)

// Redux Toolkit - це офіційна бібліотека для ефективної розробки з використанням Redux, яка призначена для стандартизації та спрощення написання логіки Redux.
// Redux Toolkit надає функцію configureStore(options), яка обертає оригінальний createStore(), єдиним аргументом очікує об'єкт параметрів та налаштовує деякі корисні інструменти  

//store-це  об'єкт, який містить повний стан програми, методи доступу до стану та відправлення екшенів. У програмі може бути лише один стор. 

//Також функція configureStore() може автоматично створити кореневий редюсер. Для цього необхідно передати властивості reducer об'єкт тієї ж форми що в combineReducers.
// Для початку видалимо створення кореневого редюсера в нашому коді програми та додамо імпорти редюсерів завдань та фільтрів із файлу src/redux/reducer.js. Тепер у файлі створення стора імпортуємо та використовуємо окремі редюсери.


