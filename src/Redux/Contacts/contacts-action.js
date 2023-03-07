import { createAction } from "@reduxjs/toolkit";


export const fetchAllContactsLoading = createAction('contacts/fetch/loading')  // назва частини стору потім дія а потім яка частина цієї дії ('contacts/fetch/loading') 
export const fetchAllContactsSuccess = createAction('contacts/fetch/success')
export const fetchAllContactsError = createAction('contacts/fetch/error')

export const fetchAddContactsLoading = createAction('contacts/add/loading')  // назва частини стору потім дія а потім яка частина цієї дії ('contacts/fetch/loading') 
export const fetchAddContactsSuccess = createAction('contacts/add/success')
export const fetchAddContactsError = createAction('contacts/add/error')

export const fetchDeleteContactsLoading = createAction('contacts/delete/loading')  // назва частини стору потім дія а потім яка частина цієї дії ('contacts/fetch/loading') 
export const fetchDeleteContactsSuccess = createAction('contacts/delete/success')
export const fetchDeleteContactsError = createAction('contacts/delete/error')

//  для кожного запиту три екшкни що запити пішов відповідь успішна відповідь не успішна 
//  Функція createAction(type) спрощує процес оголошення екшенів. В якості аргументу вона приймає рядок який описує тип дії та повертає генератор екшену.
//  Екшени - це об'єкти, які передають дані з компонентів у стор, тим самим сигналізуючи про те, яка подія сталася в інтерфейсі. Вони являються єдиним джерелом інформації для стору