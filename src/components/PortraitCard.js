import React from 'react';
import ImageBackground from '../assets/images/image-background.png';

export default function PortraitCard(props) {
  const {
    Image = ImageBackground,
    altMessage = 'Gyalrariee portrait image',
    artistName = 'artist display name',
    objectName = 'object name',
    department = 'department',
    ...others
  } = props;

  return (
    <div className='portrait-card' {...others}>
      <figure className='portrait-card__image'>
        <img src={Image && ImageBackground} alt={altMessage} />
      </figure>
      <div className='portrait-card__content'>
        <h2 className='portrait-card__artist-name'>{artistName}</h2>
        <div className='portrait-card__details'>
          <span className='portrait-card__object-name'>{objectName}</span>
          <span className='portrait-card__tags'>$tags??</span>
          <span className='portrait-card__tags'>$tags??</span>
          <span className='portrait-card__department'>{department}</span>
        </div>
      </div>
    </div>
  );
}
