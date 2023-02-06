import React from "react"
import star from "../staticImages/star.png"

export default function Card(props) {
    let badge;
    if (props.openSpots === 0){
        badge = "SOLD OUT"
    } else if(props.location == "Online") {
        badge = "Online"
    }

    return (
        <div className="card" > 
            {badge && <div className="card-badge" >{badge}</div>}
            <img src={`../images/${props.coverImg}`} alt="katie" className="card-image"/>
            <div className="card-info">
                <img src={star} className="card-star"/>
                <span>{props.stats.rating} </span>
                <span className="grey"> ({props.stats.reviewCount}) </span>
                <span className="grey"> .{props.location} </span>
            </div>
            <p className="card-title">{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}