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

  return (
    <div className='right-wall'>
      <div
        className={`card ${
          orientation === 'card--portrait' ? 'card--portrait-content' : 'card--landscape-content'
        } selected`}
      >
        <div className='card__heading card-anim card-anim-a'>
          <h2 className='card__info-title'>{title}</h2>
          <div className='card__info-id'>/paintings/[{objectID}]</div>
        </div>
        <div className='card__inner-container'>
          <div className='card__inner-heading card-anim card-anim-b'>
            <span className='card__culture'>{culture}</span>
            <span className='card__period'>{period}</span>
          </div>
          <div className='card__content'>
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
                  <li className='card__tags_item'>{department}</li>
                </ul>
              </div>
            </div>
            <div className='card__image-info'>
              <figure className='card__image card-anim card-anim-e' id='main-content-image'>
                <img src={primaryImageSmall} />
              </figure>
              <p className='card__image-dimension card-anim card-anim-d'>{dimensions}</p>
              <p className='card__date-period card-anim card-anim-d'>
                {objectBeginDate} ~ {objectEndDate}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
