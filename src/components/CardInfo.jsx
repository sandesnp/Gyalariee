export default function CardInfo({title,artistDisplayName,objectName,department,}) {
  return (
    <div className="card-info">
      {title && <div className="card-info__title">{title}</div>}
      {artistDisplayName && <div className="card-info__artist">{artistDisplayName}</div> }
      {objectName && <div className="card-info__object-name">{objectName}</div> }
      {department && <div className="card-info__department">{department}</div> }
    </div>
  );
}