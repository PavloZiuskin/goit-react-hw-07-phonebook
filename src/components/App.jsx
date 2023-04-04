import React from "react"
import { ContactsList } from "./phoneBook/phoneBookList"
import { Form } from "./Form/form"
import { Filter } from "./Filter/filter"


export const App = () => {
    return (
      <div>
        <h1>Phonebook</h1>
        <Form  />
        <h2>Contacts</h2>
        <Filter />
        <ContactsList />
        
      </div>
  )
  
};
