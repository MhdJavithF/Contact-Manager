import React, { useState } from 'react'

const AddContact = ({addContactHandler}) => {

  const [name,setName] = useState("");
  const [num,setNumber] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  }

  const handleNumber = (e) => {
    setNumber(e.target.value);
  }

  const handleClick = (e) => {
    e.preventDefault();

    if (name ==="" || num === "") {
      alert("Please enter both name and number");
      return;
    }

    const newContact = {
      id: Date.now(), // generates a simple unique id
      name: name,
      number: Number(num), 
    };

    addContactHandler(newContact);

    setName("");
    setNumber("");
  }

  return (
    <div className='ui main'>
      <h2>Add Contact</h2>
      <div className='ui form'>
        <form action={SubmitEvent}>
          <div className="field">
            <label htmlFor='name'>Name</label>
            <input type="text" id='name' placeholder='Name' onChange={handleName} value={name}/> 
          </div>
          <div className="field">
            <label htmlFor="number">Number</label>
            <input type="number" id='number' placeholder='Number' maxLength={10} onChange={handleNumber} value={num}/>
          </div>
          <button className='ui button blue' onClick={handleClick}>Add</button>
        </form>
      </div>
    </div>
  );
}

export default AddContact;