
import { combineReducers } from "@reduxjs/toolkit";

import contactsReducer from "Redux/Contacts/contacts-slice";
import filtrReducer from "Redux/Filter/filter-slice";

const rootReducer = combineReducers({
   contacts:contactsReducer ,
   filter:filtrReducer
})

export default rootReducer 

// import { combineReducers } from "redux"; === обєднує два редюсири істворює нам повню структуру сторе  і він запамятовує що за частинку contacts відповідає  contactsReducer