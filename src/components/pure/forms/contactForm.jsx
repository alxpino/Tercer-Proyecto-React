import React, { useRef } from 'react';
import PropTypes from 'prop-types';


const ContactForm = ({ add }) => {
    const nameRef = useRef('');
    const phoneRef = useRef('');
    const mailRef = useRef('');
    const connectedRef = useRef('');

    function addContact(e){
        e.preventDefault();
        const newContact = {
            name: nameRef.current.value,
            phone: phoneRef.current.value,
            mail: mailRef.current.value,
            connected: connectedRef.current.value === 'true'
        }
        add( newContact );
    }

    return (
        <form className='d-flex justify-content-center align-items-center mb-4' onSubmit={ addContact }>
          <div className='form-outline flex-fill'>
                <input type='text' id='inputName' ref={ nameRef } className='form-control form-control-lg mb-2' required autoFocus placeholder='Contact Name' />
                <input type='text' id='inputPhone' ref={ phoneRef } className='form-control form-control-lg mb-2' required placeholder='Phone Number' />
                <input type='text' id='inputEmail' ref={ mailRef } className='form-control form-control-lg mb-2' required placeholder='Email' />
                <select className='form-control form-control-lg mb-2' ref={ connectedRef } defaultValue={false} id='selectLevel'>
                    <option value={true}>
                        Connected
                    </option>
                    <option value={false}>
                        Disconnected
                    </option>
                    
                </select>
                <button type='submit' className='btn btn-success btn-lg ms-2'>New Contact</button>
            </div> 
        </form>
    );
};


ContactForm.propTypes = {
    add: PropTypes.func.isRequired
};


export default ContactForm;
