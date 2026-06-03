function MovieCard(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <h3>Year : {props.year}</h3>
        </div>
    );
}

export default MovieCard;