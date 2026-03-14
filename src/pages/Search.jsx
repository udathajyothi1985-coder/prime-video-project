import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import MovieCard from "../components/MovieCard"

function Search(){

  const { query } = useParams()
  const [movies,setMovies] = useState([])

  useEffect(()=>{

    async function searchMovies(){

      const res = await fetch(
        `https://www.omdbapi.com/?apikey=88e3e2a8&s=${query}`
      )

      const data = await res.json()

      if(data.Search){
        setMovies(data.Search)
      }

    }

    searchMovies()

  },[query])

  return(

    <div className="row">

      <h2>Search Results</h2>

      <div className="row-posters">

        {movies.map(movie=>(
          <MovieCard
            key={movie.imdbID}
            id={movie.imdbID}
            title={movie.Title}
            image={movie.Poster}
          />
        ))}

      </div>

    </div>

  )

}

export default Search