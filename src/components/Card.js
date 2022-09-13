function Card(props) {
    return( 
        <div className="card">
            <img src={`./images/${props.img}`}
                 className="card--image" 
                 alt="" />
            <p className="rating">
                <img src={"images/star.png"} 
                 className="star"
                 alt="Red rating star" /> 
                 <span>{props.rating}</span>
                 <span className="grey">{props.reviewCount} • </span>
                 <span className="grey">{props.location}</span> 
            </p>
            <p className="card--title">
                {props.title}
            </p>
            <p className="card--cost"><strong>From ${props.price}</strong>/person</p>
        </div>
    )
}

export default Card