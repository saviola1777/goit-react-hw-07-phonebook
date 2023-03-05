import {  persistReducer } from 'redux-persist'
import { combineReducers } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'

import contactsReducer from "Redux/Contacts/contacts-slice";
import filtrReducer from "Redux/Filter/filter-slice";

const rootReducer = combineReducers({
   contacts:contactsReducer ,
   filter:filtrReducer
})

const persistConfig = {
   key: 'root',
   storage,
   blacklist: ['filter'] ,
 }

 const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer

// import { combineReducers } from "redux"; === обєднує два редюсири істворює нам повню структуру сторе  і він запамятовує що за частинку contacts відповідає  contactsReducer