import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

function MovieDetails(){

  const { id } = useParams()

  const [movie,setMovie] = useState(null)

  useEffect(()=>{

    async function fetchMovie(){

      const res = await fetch(
        ` http://www.omdbapi.com/?i=tt3896198&apikey=88e3e2a8`
      )

      const data = await res.json()

      setMovie(data)

    }

    fetchMovie()

  },[id])

  if(!movie) return <h2>Loading...</h2>

  return(

    <div className="details">

      <img src={movie.Poster} />

      <div>

        <h1>{movie.Title}</h1>

        <p><b>Year:</b> {movie.Year}</p>

        <p><b>Genre:</b> {movie.Genre}</p>

        <p><b>Plot:</b> {movie.Plot}</p>

        <button className="watch-btn">
          ▶ Watch Trailer
        </button>

      </div>

    </div>

  )

}

export default MovieDetails