import "../css/itemLandscape.css";

const ItemLandscape = (theMetObject) => {
    let tmo = {};
    tmo.title = theMetObject.title ? theMetObject.title : "unknown title";
    tmo.artist = theMetObject.artistDisplayName ? theMetObject.artistDisplayName : "unknown artist";
    tmo.object = theMetObject.objectName ? theMetObject.objectName : "unknown object";
    tmo.department = theMetObject.department ? theMetObject.department : "unknown department";
    tmo.image = theMetObject.primaryImageSmall ? theMetObject.primaryImageSmall : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE1BFq0h-RvrEBWCMPudD2QMYcG2BDJVDYNw&s";
    return (
        <div className="item-container">
            <div className="item-info">
                <div className="item-info__title">{tmo.title}</div>
                <div className="item-info__artist">{tmo.artist}</div>
                <div className="item-info__extra-info">
                    <div className="item-info__objectName">{tmo.object}</div>
                    {/* <div className="item-info__tags1">$tags</div> */}
                    {/* <div className="item-info__tags2">$tags</div> */}
                    <div className="item-info__department">{tmo.department}</div>
                </div>
            </div>
            <div className="item-image">
                <figure>
                    <img src={tmo.image} alt={tmo.artist + " " + tmo.object} />
                    <figcaption></figcaption>
                </figure>
            </div>
        </div>
    );
}

export default ItemLandscape;