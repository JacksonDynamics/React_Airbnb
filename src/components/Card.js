function Card() {
    return( 
        <div className="card">
            <img src="images/katie-zaferes.png"
                 className="card--image" 
                 alt="Katie Zaferes" />
            <p className="rating">
                <img src="images/star.png" 
                 className="star"
                 alt="Red rating star" /> 
                 <span>5.0</span>
                 <span className="grey">(6) • </span>
                 <span className="grey">USA</span> 
            </p>
            <p className="card--title">
                Life lessons with Katie Zaeferes
            </p>
            <p className="card--cost"><strong>From $136</strong>/person</p>
        </div>
    )
}

export default Card