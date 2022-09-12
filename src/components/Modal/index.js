import React from 'react';

//onClose comes from props passed in from Photolist
function Modal({ currentPhoto, onClose }) {

    const { name, category, description, index } = currentPhoto;

    return (
        <div className='modalBackdrop'>
            <div className='modalContainer'>
                <h3 className='motalTitle'>{name}</h3>
                <img alt='current category' src={require(`../../assets/large/${category}/${index}.jpg`)} />
                <p>
                    {description}
                </p>
                <button type='button' onClick={onClose}>
                    Close this modal
                </button>
            </div>
        </div>
    );
}

export default Modal;