import React, { useEffect } from "react";
import { getMovies } from "../Tmdb";
import './Row.css';


const HostImage = "https://image.tmdb.org/t/p/original/"

function ROW ({title , path} ){
    const [movies, setmovies] = React.useState([]);
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
                        <img className="movie_card"
                        key={movie.id} src={`${HostImage}${movie.poster_path}`} 
                        alt={movie.name}
                        ></img>
                    );
                })}
            </div>
        </div>
)}

export default ROW;