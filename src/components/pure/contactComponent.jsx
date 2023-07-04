import React from 'react';
import PropTypes from 'prop-types';
import Contact from '../../models/contact.class';

const ContactComponent = ({ contact, connect, remove}) => {
    
    
    return (
        <tr>
            <th className='fw-normal align-middle p-2' scope='row'><span className='ms-2'>{ contact.name }</span></th>
            <td className="align-middle p-2">{ contact.phone }</td>
            <td className='align-middle p-2'>{ contact.mail }</td>
            <td className='align-middle p-2'>{ contact.connected ? <span>Conectado</span> : <span>Desconectado</span>}</td>   
            <td className='align-middle p-2'>
                <button onClick={() => connect( contact )}>{ contact.connected ? <span>Desconectar</span> : <span>Conectar</span> }</button>
                <button onClick={() => remove( contact )}>Delete</button>
            </td>
        </tr>
        
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact).isRequired,
    connect: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default ContactComponent;
