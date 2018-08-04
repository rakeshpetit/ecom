import React from 'react';
import './ImageSlider.css';

const images = [
    'https://img.freepik.com/free-photo/blue-mountains-famous-tourism-scenery-lijiang_1417-1143.jpg?size=338&ext=jpg',
    'https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&h=350',
  ]

const ImageSlider = () => {
  return (
      <div id="cf3">
          <img class="bottom" src={images[0]} />
          <img class="top" src={images[1]} />
      </div>
  )
}

export default ImageSlider;
