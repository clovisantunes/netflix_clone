import React, { useEffect } from "react";
import { getMovies } from "../../Tmdb";
import './Row.css';
import ReactPlayer from "react-player";
import movieTrailer from "movie-trailer";


const HostImage = "https://image.tmdb.org/t/p/original/"

function ROW ({title , path, isLarge} ){
    const [movies, setmovies] = React.useState([]);
    const [trailerUrl, setTrailerUrl] = React.useState("")
    const handleOnclick = (movie) => {
        if(trailerUrl){
            setTrailerUrl("");
        }else{
            movieTrailer(movie.title || movie.name || movie.original_name || "")
            .then((url) => {
            setTrailerUrl(url);
        })
        .catch((error) =>{
            console.log("Error feteching movie trailer:", error )
            });
    }
};
    
    const fetchMovies = async(_path)=> {
            try {
                const data = await getMovies(_path);
                console.log("data ", data);
                setmovies(data?.results);
            } catch (error){
                console.log("fetchMovies error: ", error);
            }
        };

    useEffect(() => {
        return () => {
            fetchMovies(path);
        }
    },[path]);
    return(
        <div className="row_container">
            <h2 className="row_header">{title}</h2>
            <div className="row_cards">
                {movies?.map(movie =>{
                    return(
                        <img className={`movie_card ${isLarge && "movie_card-large"}`}
                        onClick={()=> handleOnclick(movie)}
                        key={movie.id} 
                        src={`${HostImage}${isLarge ? movie.backdrop_path : movie.poster_path}`} 
                        alt={movie.name}
                        ></img>
                    );
                })}
            </div>
            <ReactPlayer url={trailerUrl}  playing={true}/>
        </div>
)}

export default ROW;