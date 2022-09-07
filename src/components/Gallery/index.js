import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from '../../assets/small/commercial/0.jpg'

const Gallery = (props) => {

    const currentCategory = {
        name: 'commercial',
        description: 'Photos of grocery stores, food trucks, and other commercial objects'
    };

    return(
        <section>
            <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.description}</p>
            <div>
                <img src={photo}
                alt='Commercial Example'
                className='img-thumbnail-1'
                />
            </div>
        </section>
    );
}

export default Gallery;