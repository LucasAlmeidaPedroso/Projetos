
// eslint-disable-next-line react/prop-types
const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  let url = "https://www.google.com/search?q="+Title;
  return (
   <a href={url} target= "_blank" rel="noreferrer"> <div className="movie" key={imdbID}>
      <div>
        <p>{Year}</p>
      </div>

      <div>
        <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
      </div>

      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>
    </div>
    </a>
  );
}

export default MovieCard;