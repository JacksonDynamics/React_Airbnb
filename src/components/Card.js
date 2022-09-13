function Card(props) {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }     

    return( 
        <div className="card">
            {badgeText && 
            <div className="card--badge">{badgeText}</div>}
            <img src={`./images/${props.item.coverImg}`}
                 className="card--image" 
                 alt="" />
            <p className="rating">
                <img src={"images/star.png"} 
                 className="star"
                 alt="Red rating star" /> 
                 <span>{props.item.stats.rating}</span>
                 <span className="grey">({props.item.stats.reviewCount}) • </span>
                 <span className="grey">{props.item.location}</span> 
            </p>
            <p className="card--title">
                {props.item.title}
            </p>
            <p className="card--cost"><strong>From ${props.item.price}</strong>/person</p>
        </div>
    )
}

export default Card