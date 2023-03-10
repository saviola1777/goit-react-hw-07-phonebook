import * as api from '../../shared/contacts'

import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchAllContacts = createAsyncThunk(   //операція яка отримує всі книги  передаємо два аргумента 
   'contacts/fetchAll',                           // перший аргумент назва операції
   async (_, thunkApi) => {                           //другим асинхрону функцію деми робитемимо запит (якщо перший аргумент асинхроної функції пустий ми нічого не передаємо то ставимо _ , другий аргумент thunkApi) 
      try {
         const data = await api.getAllContact()     // робимо запит 
         return data                              // якшо успішно повертаємо результат
      }
      catch ({ response }) {
         return thunkApi.rejectWithValue(response.data)
      }
   }
)

export const fetchAddContacts = createAsyncThunk(
   'contacts/add',
   async (data, thunkApi) => {                     // тут першим аргументом ми передаємо data
      try {
         const resault = await api.addContacts(data)
         return resault

      }
      catch ({ response }) {
         return thunkApi.rejectWithValue(response.data)
      }
   },
   // {
   //    condition: ({ name }, { getState }) => {
   //       const { contacts } = getState
   //       const normalizeName = name.toLowerCase()
   //       const resault = contacts.items.find(({ name }) => {
   //          return (normalizeName === name.toLowerCase())
   //       })
   //       if (resault) {
   //          return false
   //       }
   //    }
   // }
)


export const fetchDeleteContacts = createAsyncThunk(
   'contact/delete',
   async(id ,thunkApi)=>{
      try{
          await api.deleteContacts(id)
         return id
      }
      catch({response}){
         return thunkApi.rejectWithValue(response.data)
      }
   }
)