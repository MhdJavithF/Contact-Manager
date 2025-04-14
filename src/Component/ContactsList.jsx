import React from 'react'
import ContactCard from './ContactCard';

const ContactsList = ({contacts, deleteHandler}) => {
  // console.log(contacts);

  const getIdElement = (id) => {
    deleteHandler(id);
  }
  return (
    <div className='ui celled list'>
      <h2>Contact List</h2>
      {
        contacts.map(contact => (
          <ContactCard contact={contact} getIdElement={getIdElement} key={contact.id} />
        ))
      }
    </div>
  )
}

export default ContactsList;