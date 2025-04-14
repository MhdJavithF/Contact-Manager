import React from 'react'
import user from '../assets/user.avif'

const ContactCard = ({ contact, getIdElement }) => {
    const { id, name, number } = contact;

    const handleDelete = (e) => {
        getIdElement(e.target.dataset.id);
        // console.log(e.target.dataset.id);
    }
    return (
        <div className='item' data-id={id}>
            <img className="ui avatar image" src={user} alt="user" />
            <div className="content">
                <div className="header">{name}</div>
                <div>{number}</div>
            </div>
            <i
                className="trash alternate outline icon"
                style={{ color: "red", marginTop: "7px", fontSize: "18px" }}
                data-id={id} onClick={handleDelete}
            ></i>
        </div>
    )
}

export default ContactCard;