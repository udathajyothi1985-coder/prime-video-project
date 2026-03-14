import { useEffect, useState } from "react"
import MovieCard from "./MovieCard"
import { searchMovies } from "../services/api"

function MovieRow({title,query}){

  const [movies,setMovies] = useState([])

  useEffect(()=>{

    async function fetchMovies(){

      const res = await fetch(searchMovies(query))
      const data = await res.json()

      if(data.Search){
        setMovies(data.Search)
      }

    }

    fetchMovies()

  },[query])

  return(

    <div className="row">

      <h2>{title}</h2>

      <div className="row-posters">

        {movies.map((movie)=>(
          movie.Poster!=="N/A" && (
            <MovieCard
              key={movie.imdbID}
              id={movie.imdbID}
              title={movie.Title}
              image={movie.Poster}
            />
          )
        ))}

      </div>

    </div>

  )

}

export default MovieRow