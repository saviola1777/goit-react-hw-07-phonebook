import * as api from '../../shared/contacts'

import* as actions from "./contacts-action"

export const fetchAllContacts =()=>{
   const func = async(dispatch)=>{
      try{
         dispatch(actions.fetchAllContactsLoading())  // запит пішов , смикаємо редакс що запит пішов
      const data= await api.getAllContact()   // відправляємо запит
      console.log(data)
      dispatch(actions.fetchAllContactsSuccess(data)) // запит прийшов успішно ,  якщо успішно передаємо дані в редакс
      }
      catch({response}){
         dispatch(actions.fetchAllContactsError(response.data.message))
      }

   }
   return func
}

export const fetchAddContacts =(data)=>{
const func =async(dispatch)=>{
   try {
      dispatch(actions.fetchAddContactsLoading())
      const resault =await api.addContacts(data)
      dispatch(actions.fetchAddContactsSuccess(resault)) 
   }
   catch({response}){
      dispatch(actions.fetchAddContactsError(response.data.message))
   }
}
return func
}

export const fetchDeleteContacts =(id)=>{
   const func =async(dispatch)=>{
      try {
         dispatch(actions.fetchDeleteContactsLoading())
         await api.addContacts(id)
         dispatch(actions.fetchDeleteContactsSuccess(id)) 
      }
      catch({response}){
         dispatch(actions.fetchDeleteContactsError(response.data.message))
      }
   }
   return func
}