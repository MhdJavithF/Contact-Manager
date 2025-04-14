import { useEffect, useState } from 'react'
import AddContact from './Component/AddContact'
import Header from './Component/Header'
import ContactsList from './Component/ContactsList'


function App() {
  
  const [contacts, setContacts] = useState([]);
  const Local_storage_key = "contacts";

  const addContactHandler = (newContact) => {
    setContacts([...contacts, newContact]);
  }

  const deleteHandler = (id) => {
    const newContactsList = contacts.filter(contact => {
      return contact.id != id;
    })

    setContacts(newContactsList);
  }

  useEffect(() => {
    const reterivedContacts = JSON.parse(localStorage.getItem(Local_storage_key));
    console.log("Loaded from localStorage:", reterivedContacts);
    if (reterivedContacts) setContacts(reterivedContacts);
  }, []);
  
  useEffect(() => {
    console.log("Saving to localStorage:", contacts);
    localStorage.setItem(Local_storage_key, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className='ui container'>
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactsList contacts={contacts} deleteHandler={deleteHandler}/>
    </div>
  )
}

export default App
