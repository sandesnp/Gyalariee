import React from "react";
import "../css/itemLandscape.css";

function ItemLandscape(props) {
    return (
        <div className="item-container">
            <div className="item-info">
                <div className="item-info__title">$artistDisplayName</div>
                <div className="item-info__extra-info">
                    <div className="item-info__objectName">$objectName</div>
                    <div className="item-info__tags1">$tags</div>
                    <div className="item-info__tags2">$tags</div>
                    <div className="item-info__department">$department</div>
                </div>
            </div>
            <div className="item-image">
                <img src={props.image} alt={props.alt} />
            </div>
        </div>
    );
}

export default ItemLandscape;