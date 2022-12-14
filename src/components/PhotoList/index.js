import React, {useState} from 'react';
import Modal from '../Modal';


//destructuring category from the props object
function PhotoList({ category }) {

  //------HOOKS / STATE VARIABLES -----------------------------------------------

	const [photos] = useState([
        {
            name: 'Grocery aisle',
            category: 'commercial',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          },
          {
            name: 'Grocery booth',
            category: 'commercial',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          },
          {
            name: 'Building exterior',
            category: 'commercial',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          },
          {
            name: 'Restaurant table',
            category: 'commercial',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          },
          {
            name: 'Cafe interior',
            category: 'commercial',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          },
          {
            name: 'Cat green eyes',
            category: 'portraits',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          },
          {
            name: 'Green parrot',
            category: 'portraits',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          },
          {
            name: 'Yellow macaw',
            category: 'portraits',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          },
          {
            name: 'Pug smile',
            category: 'portraits',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          },
          {
            name: 'Pancakes',
            category: 'food',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          },
          {
            name: 'Burrito',
            category: 'food',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          },
          {
            name: 'Scallop pasta',
            category: 'food',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          },
          {
            name: 'Burger',
            category: 'food',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          },
          {
            name: 'Fruit bowl',
            category: 'food',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          },
          {
            name: 'Green river',
            category: 'landscape',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          },
          {
            name: 'Docks',
            category: 'landscape',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          },
          {
            name: 'Panoramic village by sea',
            category: 'landscape',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          },
          {
            name: 'Domestic landscape',
            category: 'landscape',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          },
          {
            name: 'Park bench',
            category: 'landscape',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          },
	]);

    //filter entire array of photos to return only the ones matching the chosen category
    const currentPhotos = photos.filter((photo) => photo.category === category);

  const [currentPhoto, setCurrentPhoto ] = useState();

  const [isModalOpen, setIsModalOpen] = useState(false);

  //-----EVENT HANDLERS-----------------------------------------------------------
  
    //function to toggle modal
    const toggleModal = (image, i) => {
      //set current photo
      setCurrentPhoto({...image, index: i});
      setIsModalOpen(!isModalOpen);
    }

  //----------COMPONENT---------------------------------------------------------------

	return (
		<div>
      {isModalOpen && (
        // adding a function through an onClose identifier will pass the function as a prop to the child component that can be accessed as onClose
        <Modal currentPhoto={currentPhoto} onClose={toggleModal} />
      )}
			<div className='flex-row'>
                {currentPhotos.map((image, i) => (
                    <img
                        //uses require to take advantage of incremental naming of files using i
                        //default property is where image has been saved, must be invoked to display image properly
                        src={require(`../../assets/small/${category}/${i}.jpg`)}
                        //alt tag for accessibility
                        alt={image.name}
                        //CSS classes
                        className='img-thumbnail mx-1'
                        //key for each item in the array, needed for React to update the DOM correctly
                        key={image.name}
                        onClick={() => toggleModal(image, i)}
                    />
                ))}
            </div>
		</div>
	);
}

export default PhotoList;
