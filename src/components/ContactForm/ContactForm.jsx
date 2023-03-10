import { useSelector, useDispatch} from "react-redux";    // імпортуємо компонент провайдер який дає доступ до глобального стану
import css from "components/ContactForm/ContactForm.module.css"

import {allContact} from '../../Redux/Contacts/contacts-selector'
import* as actions from '../../Redux/Contacts/contacts-operations' 
 
const ContactForm =()=>{  
const contacts = useSelector(allContact) 
const dispatch= useDispatch()
console.log(contacts)

 const onHendleSubmit = (e) => {
  e.preventDefault();
  const name = e.currentTarget.name.value
  const number = e.currentTarget.number.value

    dispatch(actions.fetchAddContacts( name, number))     // а екшен наш обєкт яка приймає імя і номер і записує дані в пейлоад повертає обєкт який потрапляє в диспач і він запихає в
    
     e.currentTarget.reset();
   }

                           
   
    return (

      <div className={css.wrapper}>
        <form onSubmit={onHendleSubmit} className={css.form}>
          <label className={css.name}> Name
            <input
              className={css.input}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              // value={filter}

            /> </label>
          <label className={css.name}>Number
            <input
              className={css.input}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              // value={filter}
            />
          </label>
          <button className={css.button} type="submit">Add contact</button>

        </form>
      </div>
    )

}


export default ContactForm;



