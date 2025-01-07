export default function CardImage({primaryImage,primaryImageSmall,artistDisplayName,objectName,type}) {
  return (
    <>
      { primaryImageSmall && (
        <figure className="card__image">
          <img src={type ? primaryImage : primaryImageSmall} alt={artistDisplayName + " " + objectName} />
          <figcaption></figcaption>
        </figure>
      ) }
    </>
  );
}
