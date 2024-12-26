import React, { useState } from 'react';
import image1 from '../public/image1.jpg';
import image2 from '../public/image2.jpg';
import image3 from '../public/image3.jpg';
import image4 from '../public/image4.jpg';
import image5 from '../public/image5.jpg';
import image6 from '../public/image6.jpg';
import image7 from '../public/image7.jpg';
import image8 from '../public/image8.jpg';
import image9 from '../public/image9.jpg';
import image10 from '../public/image10.jpg';
import image11 from '../public/image11.jpg';
import image12 from '../public/image12.jpg';
import image13 from '../public/image13.jpg';
import './ImageGallery.css';

const ImageGallery = () => {
  const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13];

  const [selectedImage, setSelectedImage] = useState(null);

  const closeLightbox = () => setSelectedImage(null);

  return (
    <div className='imageGallery'>
      <h1>Galerie foto</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery ${index + 1}`}
            style={{ width: '150px', height: '120px', cursor: 'pointer', padding: '5px' }}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>

      {selectedImage && (
        <div className='styleImages'
        

          onClick={closeLightbox}
        >
          <img
            src={selectedImage}
            alt="Large"
            style={{ maxWidth: '90%', maxHeight: '90%' }}
          />
        </div>
      )}
    </div>
  );
};

export default ImageGallery;