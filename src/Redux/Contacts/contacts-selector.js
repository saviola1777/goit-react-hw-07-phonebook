
export const allContact=store=>store.contacts
export const allFilter=store=>store.filter

export const getFilteredContact = ({contacts , filter}) => {
   if (!filter) return contacts;
   const normalizedFilter = filter.toLocaleLowerCase();
   const result = contacts.filter(({ name }) => {
     return (name.toLocaleLowerCase().includes(normalizedFilter))
   })
   return result
 }


