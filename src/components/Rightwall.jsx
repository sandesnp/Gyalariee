import { useState, useEffect } from 'react';

export default function Rightwall({ selectedCard }) {
  const {
    title = '$title',
    artistDisplayName = '$artistDisplayName',
    objectName = '$objectName',
    department = '$department',
    objectID = '$objectID',
    creditLine = '$creditLine',
    medium = '$medium',
    repository = '$repository',
    culture = '$culture',
    period = '$period',
    objectBeginDate = '$objectBeginDate',
    objectEndDate = '$objectEndDate',
    dimensions = '$dimensions',
    primaryImageSmall = 'images/unknown.png',
    orientation = null,
  } = selectedCard;

  const [vw, setVw] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setVw(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='right-wall'>
      <div
        className={`card ${
          vw < 1200
            ? 'card--landscape-content'
            : orientation === 'card--half-landscape'
            ? 'card--landscape-content'
            : orientation + '-content'
        } selected`}
      >
        <div className='card__heading card-anim card-anim-a'>
          <h2 className='card__info-title'>{title}</h2>
          <div className='card__info-id'>/paintings/[{objectID}]</div>
        </div>
        <div className='card__inner-container'>
          <div className='card__inner-container--left'>
            <div className='card__spacing'>&nbsp;</div>
            <div className='card__info'>
              <div className='card__info-heading card-anim card-anim-c'>
                <h3 className='card__artist-name'>{artistDisplayName}</h3>
                <div className='card__credit-line'>{creditLine}</div>
              </div>
              <div className='card__info-footer card-anim card-anim-d'>
                <div className='card__detail'>
                  <div className='card__medium'>{medium}</div>
                  <div className='card__repository'>{repository}</div>
                </div>
                <ul className='card__tags'>
                  <li className='card__tags-item'>{objectName}</li>
                  <li className='card__tags-item'>{department}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='card__inner-container--right'>
            <div className='card__inner-heading card-anim card-anim-b'>
              <span className='card__culture'>{culture}</span>
              <span className='card__period'>{period}</span>
            </div>
            <div className='card__media'>
              <figure className='card__media-image card-anim card-anim-e'>
                <img src={primaryImageSmall} alt='Gyalariee musuem image' id='main-content-image' />
                {/* <div className='img'></div> */}
              </figure>
              <div className='card__media-info'>
                <p className='card__image-dimension card-anim card-anim-d'>{dimensions}</p>
                <p className='card__date-period card-anim card-anim-d'>
                  [{objectBeginDate} ~ {objectEndDate}]
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
