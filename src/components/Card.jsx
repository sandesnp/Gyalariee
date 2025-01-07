import CardInfo from "./CardInfo";
import CardImage from "./CardImage";

export default function Card({museumObject, selected=false}) {
  museumObject.title ??= "unknown title";
  museumObject.artistDisplayName ??= "unknown artist";
  museumObject.objectName ??= "unknown object";
  museumObject.department ??= "unknown department";
  museumObject.primaryImageSmall ??=
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE1BFq0h-RvrEBWCMPudD2QMYcG2BDJVDYNw&s";
  let classes = `card ${museumObject.orientation} ${selected ? "selected" : ""}`;
  return (
    <div className={classes}>
      <CardInfo museumObject={museumObject} selected={selected} />
      {/* <CardImage {...museumObject} type={type} /> */}
    </div>
  );
}
