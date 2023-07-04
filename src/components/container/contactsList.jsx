

import React, { useState } from 'react';
import ContactComponent from '../pure/contactComponent';
import Contact from '../../models/contact.class';
import ContactForm from '../pure/forms/contactForm';

const ContactsList = () => {
    const c1 = new Contact('Alex', '1234589', 'alex@gmail.com', false);
    const c2 = new Contact('Axel', '2345676', 'axel@gmail.com', true);
    const c3 = new Contact('Alexander', '3467892', 'alexander@gmail.com', true);
    const c4 = new Contact('Alejandro', '4567898', 'alejandro08@gmail.com', false);
    
    // Estado del componente
    const [contacts, setContacts] = useState([c1, c2, c3, c4]);

    const connect = (contact) => {
        const index = contacts.indexOf(contact);
        const newContacts = [...contacts];
        newContacts[index].connected = !newContacts[index].connected;
        setContacts(newContacts);
    }
    const remove = (contact) => {
        const index = contacts.indexOf(contact);
        const newContacts = [...contacts];
        newContacts.splice(index, 1);
        setContacts(newContacts);
    }

    function addContact(contact){
        const newContacts = [ ...contacts ];
        newContacts.push(contact);
        setContacts(newContacts);
    } 


    return (
        <div>
            <table className='table'>
                <thead>
                    <tr>
                        <th scope='col'>Name</th>
                        <th scope='col'>Phone</th>
                        <th scope='col'>Mail</th>
                        <th scope='col'>Status</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact, index) => {
                        return(
                            <ContactComponent key={ index } contact={ contact } connect={ connect } remove={ remove }></ContactComponent>
                        )
                    })}
                </tbody>
            </table>
            <h3>Add a contact</h3>
            <ContactForm add={ addContact }></ContactForm>
        </div>
    );
}

export default ContactsList;
