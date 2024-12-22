import "../css/cardObject.css";
import CardInfo from "./CardInfo";
import CardImage from "./CardImage";

export default function CardObject(tmo) {
  tmo.title ??= "unknown title";
  tmo.artistDisplayName ??= "unknown artist";
  tmo.objectName ??= "unknown object";
  tmo.department ??= "unknown department";
  tmo.primaryImageSmall ??=
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE1BFq0h-RvrEBWCMPudD2QMYcG2BDJVDYNw&s";
  let portrait = Math.round(Math.random()) === 1;
  return (
    <div className={`card ${portrait?'portrait':''}`}>
      <CardInfo {...tmo} />
      <CardImage {...tmo} />
    </div>
  );
}
