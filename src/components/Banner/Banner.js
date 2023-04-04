import React, { useEffect } from "react";
import "./Banner.css";
import categories, { getMovies } from "../../Tmdb";

function Banner() {
  const [movie, setMovie] = React.useState({});
  const fetchRandomMovie = async () => {
    try {
      const netflixOriginalscategory = categories.find(
        (category) => category.name === "netflixOriginals"
      );
      const data = await getMovies(netflixOriginalscategory.path);
      const movies = data?.results;
      const randomIndex = Math.floor(Math.random() * movies.length);
      setMovie(movies[randomIndex]);
    } catch (error) {
      console.log("banner FetchRandomMovie error:", error);
    }
  };
  useEffect(() => {
    fetchRandomMovie();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substring(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="Banner_container"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        roundPosition: "center-center",
      }}
    >
      <h1 className="banner_title">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <div className="banner_description"></div>
      <h2 className="banner_description">{truncate(movie?.overview, 150)}</h2>
      <button className="banner_button">Assistir</button>
      <button className="banner_button">Minha Lista</button>
    </header>
  );
}

export default Banner;
