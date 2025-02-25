import { useRef, useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';

export default function SearchCard({ museumObject, handleSelect }) {
  const cardRef = useRef(null);
  const {
    artistDisplayName = '$artistDisplayName',
    objectName = '$objectName',
    department = '$department',
    objectID = '$objectID',
    primaryImageSmall = 'images/unknown.png',
    orientation = null,
  } = museumObject;

  const animateCardMovement = (animeTimeline) => {
    // Calculate position differences between the original and target images.
    const originalCoordinateAndSize = cardRef.current
      .querySelector('.card__image')
      .getBoundingClientRect();
    const targetCoordinateAndSize = document
      .getElementById('main-content-image')
      .getBoundingClientRect();
    const deltas = {
      X: originalCoordinateAndSize.left - targetCoordinateAndSize.left,
      Y: originalCoordinateAndSize.top - targetCoordinateAndSize.top,
    };

    // Clone the image so we can animate it without modifying the original.
    const cloneImage = cardRef.current.querySelector('.card__image').cloneNode(true);
    Object.assign(cloneImage.style, {
      width: targetCoordinateAndSize.width + 'px',
      height: targetCoordinateAndSize.height + 'px',
      position: 'absolute',
      left: targetCoordinateAndSize.left + 'px',
      top: targetCoordinateAndSize.top + 'px',
      zIndex: 100,
      // Alternative approach: using transform to offset: `translate(${deltas.X}px,${deltas.Y}px)`,
    });
    cloneImage.classList.add('temporary');
    document.body.appendChild(cloneImage);
    const imageTimeline = anime.timeline({ easing: 'linear' });
    //Animate this immediatly with duration of 1 second
    imageTimeline.add({
      targets: cloneImage,
      translateX: deltas.X,
      translateY: deltas.Y,
      width: originalCoordinateAndSize.width + 'px',
      height: originalCoordinateAndSize.height + 'px',
      duration: 0,
    });

    imageTimeline.add({
      targets: cloneImage,
      translateX: 0,
      translateY: 0,
      width: targetCoordinateAndSize.width + 'px',
      height: targetCoordinateAndSize.height + 'px',
      duration: 1000,
    });
  };

  const textPopOut = (animeTimeline) => {
    // Animate this immediatly
    animeTimeline.add({
      targets: '.card-anim',
      opacity: 0,
      duration: 0,
    });
  };
  const textPopIn = (animeTimeline) => {
    //Animate this after 1 second
    animeTimeline.add({
      targets: '.card-anim',
      opacity: 1,
      delay: 1000,
      duration: 500,
      complete: (_) => {
        document.body.removeChild(document.querySelector('.temporary'));
      },
    });
  };
  const animationCard = () => {
    const animeTimeline = anime.timeline({ easing: 'linear' });
    handleSelect(objectID);
    requestAnimationFrame(() => {
      animateCardMovement();
      textPopOut(animeTimeline);
      textPopIn(animeTimeline);
    });
  };

  return (
    <div className={'card ' + orientation} ref={cardRef} onClick={animationCard}>
      <div className='card--search'>
        <div className='card__info'>
          <h4 className='card__artist'>{artistDisplayName}</h4>
          <ul className='card__tags'>
            <li className='card__object-name'>{objectName}</li>
            <li className='card__department'>{department}</li>
          </ul>
        </div>
        <figure className='card__image'>
          <img src={primaryImageSmall} alt={artistDisplayName + ' ' + objectName} />
        </figure>
      </div>
    </div>
  );
}
