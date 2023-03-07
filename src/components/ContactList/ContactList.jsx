import css from "components/ContactList/ContactList.module.css";
import { useEffect } from "react";

import { fetchAllContacts } from "Redux/Contacts/contacts-operations";
import { useSelector, useDispatch } from "react-redux";
import { getFilteredContact } from 'Redux/Contacts/contacts-selector'
import { deleteContacts } from "Redux/Contacts/contacts-slice"

const ContactList = () => {

  useEffect(()=>{
    dispatch(fetchAllContacts())  // викликаємо функцію повертається функція і ми її пхаємо в диспатч
  },[])

  const contacts = useSelector(getFilteredContact)
  const dispatch = useDispatch()


  const deleteContact = id => {
    const action = deleteContacts(id)
    dispatch(action)
    
  }

  const contactList = contacts.map(({ id, name, number }) =>
    <li className={css.contactItem} key={id}>
      <p className={css.contactSpan}>{name}</p><p className={css.contactSpam}>{number}</p>
      <button className={css.contactButton} type="button" onClick={() => deleteContact(id)}>delete</button></li>)
      console.log('contactList функція яку перебираємо через map',contactList)
  return (

    <ol className={css.contactList}>{contactList}</ol>

  )
}

export default ContactList


// тут фсю логіку ми робили в експортованій функці  {getFilteredContact} 'Redux/Contacts/contacts-selector'
// ми визвали useSelector який дає доступ до глобального стейту і передали функцію яка має доступ до всії контактів і фільтрів якщо фільтр пустий вона повнртає всі контакти з глобального стейту б якшо ні то фільтрує по імені і повертає ті контакти одфільтровані і ми перебираємо і одмалювуємо всі контакти якшо шукаємо по фільтру воно одмалює одфільтровані контакти 