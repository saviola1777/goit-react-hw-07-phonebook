import * as api from '../../shared/contacts'

import { fetchAddContactsLoading ,fetchAddContactsSuccess,fetchAddContactsError} from "./contacts-action"  // наші екшени 
import {fetchAllContactsLoading ,fetchAllContactsSuccess,fetchAllContactsError } from "./contacts-action"
import {fetchDeleteContactsLoading, fetchDeleteContactsSuccess,fetchDeleteContactsError } from "./contacts-action"

export const fetchAllContacts =()=>{
   const func = async(dispatch)=>{
      try{
         dispatch(fetchAllContactsLoading())  // запит пішов , смикаємо редакс що запит пішов
      const data= await api.getAllContact()   // відправляємо запит
      dispatch(fetchAllContactsSuccess(data)) // запит прийшов успішно ,  якщо успішно передаємо дані в редакс
      }
      catch({response}){
         dispatch(fetchAllContactsError(response.data.message))
      }

   }
   return func
}

export const fetchAddContacts =(data)=>{
const func =async(dispatch)=>{
   try {
      dispatch(fetchAddContactsLoading())
      const resault =await api.addContacts(data)
      dispatch(fetchAddContactsSuccess(resault)) 
   }
   catch({response}){
      dispatch(fetchAddContactsError(response.data.message))
   }
}
return func
}

export const fetchDeleteContacts =(id)=>{
   const func =async(dispatch)=>{
      try {
         dispatch(fetchDeleteContactsLoading())
         await api.addContacts(id)
         dispatch(fetchDeleteContactsSuccess(id)) 
      }
      catch({response}){
         dispatch(fetchDeleteContactsError(response.data.message))
      }
   }
   return func
}