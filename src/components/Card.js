function Card({img, rating, reviewCount, country, title, price}) {
    return( 
        <div className="card">
            <img src={`./images/${img}`}
                 className="card--image" 
                 alt="Katie Zaferes" />
            <p className="rating">
                <img src={"images/star.png"} 
                 className="star"
                 alt="Red rating star" /> 
                 <span>{rating}</span>
                 <span className="grey">{reviewCount} • </span>
                 <span className="grey">{country}</span> 
            </p>
            <p className="card--title">
                {title}
            </p>
            <p className="card--cost"><strong>From ${price}</strong>/person</p>
        </div>
    )
}

export default Card