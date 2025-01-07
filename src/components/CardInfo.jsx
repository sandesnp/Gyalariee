export default function CardInfo({museumObject, selected}) {
  const { title, artistDisplayName, objectName, department, objectID, creditLine, medium, repository, culture,
    period,objectBeginDate, objectEndDate, dimensions, primaryImageSmall} = museumObject;
   
  if (selected) {
    return (
      <div className='card__info'>
        <div className='card__heading'>
          {title && <div className='card__info-title'>{title}</div>}
          {title && <div className='card__info-id'>{objectID}</div>}
        </div>
        <div className='card__inner-container'>
          <div className='card__inner-heading'>
            <span className='card__culture'>{culture}</span>
            <span className='card__period'>{period}</span>
          </div>
          <div className='card__content'>
            <div className='card__info-heading'>
              <div className="card__info-heading">
                <div className="card__artist-name">{artistDisplayName}</div>
                <div className="card__credit-line">{creditLine}</div>
              </div>
              <div className="card__info-footer">
                <div className="card__detail">
                  <div className="card__medium">{medium}</div>
                  <div className="card__repository">{repository}</div>
                </div>
                <div className="card__tags">
                  <div className="card__object-name">{objectName}</div>
                  <div className="card__department">{department}</div>
                </div>
              </div>
            </div>
            <div className='card__image-info'>
              <figure>
                <img src={primaryImageSmall}/>
                <figcaption>{dimensions}</figcaption>
              </figure>
              <div className='card__date-period'>{objectBeginDate} ~ {objectEndDate}</div>
            </div>
          </div>
        </div>
        {artistDisplayName && (
          <div className='card__info-artist'>{artistDisplayName}</div>
        )}
        {objectName && (
          <div className='card__info-object-name'>{objectName}</div>
        )}
        {department && (
          <div className='card__info-department'>{department}</div>
        )}
      </div>
    );
  }

  return (
    <>
    <div className='card__info'>
      {title && <div className='card__title'>{title}</div>}
      {artistDisplayName && (
        <div className='card__artist'>{artistDisplayName}</div>
      )}
      {objectName && <div className='card__info-object-name'>{objectName}</div>}
      {department && <div className='card__info-department'>{department}</div>}
    </div>
    { primaryImageSmall && (
        <figure className="card__image">
          <img src={primaryImageSmall} alt={artistDisplayName + " " + objectName} />
          <figcaption></figcaption>
        </figure>
      ) }
    </>
  );
}
