function Card() {
    return( 
        <div className="card">
            <img src="images/katie-zaferes.png"
                 className="katie" 
                 alt="Katie Zaferes" />
            <p className="rating">
                <img src="images/star.png" 
                 className="star"
                 alt="Red rating star" /> 5.0 USA
            </p>
            <p className="card--title">
                Life lessons with Katie Zaeferes
            </p>
            <p className="card--cost"><strong>From $136</strong>/person</p>
        </div>
    )
}

export default Card