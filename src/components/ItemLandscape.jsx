import "../css/itemLandscape.css";

const ItemLandscape = (theMetObject) => {

    return (
        <div className="item-container">
            <div className="item-info">
                <div className="item-info__title">{theMetObject.title ?? "$title"}</div>
                <div className="item-info__artist">{theMetObject.artistDisplayName ?? "$artistDisplayName"}</div>
                <div className="item-info__extra-info">
                    <div className="item-info__objectName">{theMetObject.objectName ?? "$objectName"}</div>
                    {/* <div className="item-info__tags1">$tags</div> */}
                    {/* <div className="item-info__tags2">$tags</div> */}
                    <div className="item-info__department">{theMetObject.department ?? "$department"}</div>
                </div>
            </div>
            <div className="item-image">
                <img src={theMetObject.primaryImageSmall ?? ""} alt={theMetObject.artistDisplayName + " " + theMetObject.objectName} />
            </div>
        </div>
    );null;
}

export default ItemLandscape;