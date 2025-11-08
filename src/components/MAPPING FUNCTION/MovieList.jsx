// Create an array of movie objects {title, rating} — show only movies with rating above 8 using .filter() + .map().
function MovieList() {
  const movies = [
    { title: "Inception", rating: 9 },
    { title: "Avatar", rating: 7.8 },
    { title: "Interstellar", rating: 8.5 },
    { title: "The Dark Knight", rating: 9.2 },
  ];

  const topMovies = movies.filter(movie => movie.rating > 8);

  return (
    <ol>
      {topMovies.map((movie, index) => (
        <li key={index}>
          {movie.title} — Rating: {movie.rating}
        </li>
      ))}
    </ol>
  );
}
export default MovieList;
