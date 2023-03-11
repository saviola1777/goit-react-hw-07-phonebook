import { createSlice } from "@reduxjs/toolkit"

import {fetchAllContacts ,fetchAddContacts , fetchDeleteContacts } from '../../Redux/Contacts/contacts-operations'

const initialState ={
   items:[],
   loading:false,
   error:null,
}

const contactsSlice = createSlice({
   name:'contacts',                               // назва нашого стору так якми називаємо потім наші екшени щоб отримати доступ до стору
   initialState,                                  // початковий стан наш стейт

   extraReducers:builder=>{                   // передаємо білдер визиваємо метод addCase де першим аргументом передаємо назва що зробити другим логіку як зробити
   builder
   .addCase(fetchAllContacts.pending , (store)=>{                     
      store.loading=true
   })
   .addCase(fetchAllContacts.fulfilled , (store,{payload})=>{
      store.loading=false
      store.items=payload
   })
   .addCase(fetchAllContacts.rejected , (store,{payload})=>{
      store.loading=false
      store.error=payload
   })
   .addCase(fetchAddContacts.pending , (store)=>{                  
      store.loading=true
   })
   .addCase(fetchAddContacts.fulfilled, (store,{payload})=>{          
         store.loading=false
         store.items.push(payload)
   })
   .addCase(fetchAddContacts.rejected , (store ,{payload})=>{
      store.loading=false
      store.items=payload
   })
   .addCase(fetchDeleteContacts.pending  , (store)=>{
      store.loading=true
   })
   .addCase(fetchDeleteContacts.fulfilled , (store,{payload})=>{
      store.loading=false
      const index=store.items.findIndex(item=>item.id===payload)
      store.items.splice(index , 1)
   })     
   .addCase(fetchDeleteContacts.rejected , (store,{payloaad})=>{
      store.loading=false
      store.error=payloaad
   })                     
   
   }
})



export default contactsSlice.reducer

//При проектуванні структура стану Redux ділиться на слайси (slice, частина), за кожен із яких відповідає окремий редюсер
//Для кожного слайсу створюється стандартний набір сутностей: типи екшенів, генератори екшенів та редюсер. Редюсери визначають початковий стан слайсу, 
//список екшенів, що впливають на нього та операції оновлення стану.

//функція createSlice()Вона приймає параметри налаштувань, створює і повертає типи екшенів, генератори екшенів та редюсер. Розберемо створення слайсу на прикладі списку задач.
