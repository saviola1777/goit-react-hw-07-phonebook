import axios from "axios";

const contactsInstance =axios.create({
   baseURL:"https://64046cb280d9c5c7bac775af.mockapi.io/contacts"
})
 export const getAllContact =async()=>{
   const {data}= await contactsInstance.get('/')
  //  console.log(data)
   return data
  
 }

 export const addContacts =async(data)=>{
  const {data:resault}= await contactsInstance.post('/', data)
  
  return resault
 }

 export const deleteContacts = async(id)=>{
  const {data}= await contactsInstance.delete(`/${id}`)
  return data
 }