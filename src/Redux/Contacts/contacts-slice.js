
import { createSlice } from "@reduxjs/toolkit"
// import { nanoid } from "nanoid"

import { fetchAddContactsLoading ,fetchAddContactsSuccess,fetchAddContactsError} from "./contacts-action"  // наші екшени 
import {fetchAllContactsLoading ,fetchAllContactsSuccess,fetchAllContactsError } from "./contacts-action"
import {fetchDeleteContactsLoading, fetchDeleteContactsSuccess,fetchDeleteContactsError } from "./contacts-action"

const initialState ={
   items:[],
   loading:false,
   error:null,
}

const contactsSlice = createSlice({
   name:'contacts',                               // назва нашого стору так якми називаємо потім наші екшени щоб отримати доступ до стору
   initialState,                                  // початковий стан наш стейт

   reducers:{                                                //Додамо редюсер для обробки кожного з можливих станів запиту.
   [fetchAllContactsLoading]:(store)=>{                     //Виконається в момент старту HTTP-запиту це наші екшени і пишемо що робити 
      store.loading=true
   },
   [fetchAllContactsSuccess]:(store,{payload})=>{           //Виконається якщо HTTP-запит завершився успішно
      store.loading=false
      store.items=payload
   },
   [fetchAllContactsError]:(store,{payloaad})=>{
      store.loading=false
      store.error=payloaad
   },
   [fetchAddContactsLoading]:(store)=>{                     //Виконається в момент старту HTTP-запиту це наші екшени і пишемо що робити 
      store.loading=true
   },
   [fetchAddContactsSuccess]:(store,{payload})=>{           //Виконається якщо HTTP-запит завершився успішно
      store.loading=false
      store.items.push(payload)
   },
   [fetchAddContactsError]:(store,{payloaad})=>{
      store.loading=false
      store.error=payloaad
   },
      [fetchDeleteContactsLoading]:(store)=>{                     //Виконається в момент старту HTTP-запиту це наші екшени і пишемо що робити 
      store.loading=true
   },
   [fetchDeleteContactsSuccess]:(store,{payload})=>{           //Виконається якщо HTTP-запит завершився успішно
      store.loading=false
      const index=store.items.findIndex(item=>item.id===payload)
      store.items.splice(index , 1)
   },
   [fetchDeleteContactsError]:(store,{payloaad})=>{
      store.loading=false
      store.error=payloaad
   },

   }
})


export const { addContact, deleteContacts } = contactsSlice.actions;
export default contactsSlice.reducer

//При проектуванні структура стану Redux ділиться на слайси (slice, частина), за кожен із яких відповідає окремий редюсер
//Для кожного слайсу створюється стандартний набір сутностей: типи екшенів, генератори екшенів та редюсер. Редюсери визначають початковий стан слайсу, 
//список екшенів, що впливають на нього та операції оновлення стану.

//функція createSlice()Вона приймає параметри налаштувань, створює і повертає типи екшенів, генератори екшенів та редюсер. Розберемо створення слайсу на прикладі списку задач.
