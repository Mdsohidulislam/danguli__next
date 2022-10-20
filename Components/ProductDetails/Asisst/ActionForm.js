import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ActionForm = () => {

    const handleUpdate = (e) => {
        e.preventDefault();
    }

    return (
        <div className='ans__and__question__action__form'>
            <div className='container'>
                <form onSubmit={handleUpdate}>
                    <textarea placeholder='Replay here ....' required></textarea>
                    <input value='submit' type='submit'></input>
                </form>
                
            </div>
            <div className='action__container'>
                <button className='edit'><FontAwesomeIcon icon={faEdit}/></button>
                <button className='delete'><FontAwesomeIcon icon={faTrash}/></button>
            </div>
        </div>
    );
};

export default ActionForm;