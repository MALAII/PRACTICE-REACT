// In a <Movie /> component, destructure props to display movie title and rating.

function MovieComp({name , rating}){
    return(
        <>
         <p>MOVIE :{name} RATING :{rating}</p>
        </>
    );
}
export default MovieComp;