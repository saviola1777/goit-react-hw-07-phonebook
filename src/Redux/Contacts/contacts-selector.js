import { createSelector } from "@reduxjs/toolkit";
export const allContact = state => state.contacts.items

export const allFilter=store=>store.filter

export const getFilteredContact = createSelector([allContact  , allFilter], (contacts , filter) => {
   if (!filter) return contacts;
   const normalizedFilter = filter.toLocaleLowerCase();
   const result = contacts.filter(({ name }) => {
     return (name.toLocaleLowerCase().includes(normalizedFilter))
   })
   return result
 })


