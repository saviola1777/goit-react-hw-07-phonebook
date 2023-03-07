
import { createSlice } from "@reduxjs/toolkit"
// import { nanoid } from "nanoid"

import* as actions from "./contacts-action"  // наші екшени 


const initialState ={
   items:[],
   loading:false,
   error:null,
}

const contactsSlice = createSlice({
   name:'contacts',                               // назва нашого стору так якми називаємо потім наші екшени щоб отримати доступ до стору
   initialState,                                  // початковий стан наш стейт

   extraReducers:{                                                //Додамо редюсер для обробки кожного з можливих станів запиту.
   [actions.fetchAllContactsLoading]:(store)=>{                     //Виконається в момент старту HTTP-запиту це наші екшени і пишемо що робити 
      store.loading=true
   },
   [actions.fetchAllContactsSuccess]:(store,{payload})=>{           //Виконається якщо HTTP-запит завершився успішно
      store.loading=false
      store.items=payload
   },
   [actions.fetchAllContactsError]:(store,{payload})=>{
      store.loading=false
      store.error=payload
   },
   [actions.fetchAddContactsLoading]:(store)=>{                     //Виконається в момент старту HTTP-запиту це наші екшени і пишемо що робити 
      store.loading=true
   },
   [actions.fetchAddContactsSuccess]:(store,{payload})=>{           //Виконається якщо HTTP-запит завершився успішно
      store.loading=false
      store.items.push(payload)
   },
   [actions.fetchAddContactsError]:(store,{payloaad})=>{
      store.loading=false
      store.error=payloaad
   },
      [actions.fetchDeleteContactsLoading]:(store)=>{                     //Виконається в момент старту HTTP-запиту це наші екшени і пишемо що робити 
      store.loading=true
   },
   [actions.fetchDeleteContactsSuccess]:(store,{payload})=>{           //Виконається якщо HTTP-запит завершився успішно
      store.loading=false
      const index=store.items.findIndex(item=>item.id===payload)
      store.items.splice(index , 1)
   },
   [actions.fetchDeleteContactsError]:(store,{payloaad})=>{
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
