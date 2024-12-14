const LandscapeCard = ({
  title = 'unknown title',
  artistDisplayName = 'unknown artist',
  objectName = 'unknown object',
  department = 'unknown department',
  primaryImageSmall = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE1BFq0h-RvrEBWCMPudD2QMYcG2BDJVDYNw&s',
}) => {
  return (
    <div className='item-container'>
      <div className='item-info'>
        <div className='item-info__title'>{title}</div>
        <div className='item-info__artist'>{artistDisplayName}</div>
        <div className='item-info__extra-info'>
          <div className='item-info__object-name'>{objectName}</div>
          {/* <div className="item-info__tags1">$tags</div> */}
          {/* <div className="item-info__tags2">$tags</div> */}
          <div className='item-info__department'>{department}</div>
        </div>
      </div>
      <div className='item-image'>
        <figure>
          <img
            src={primaryImageSmall}
            alt={artistDisplayName + ' ' + objectName}
          />
          <figcaption></figcaption>
        </figure>
      </div>
    </div>
  );
};

export default LandscapeCard;
