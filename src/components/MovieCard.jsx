import { useNavigate } from "react-router-dom"

function MovieCard({ id, title, image }){

  const navigate = useNavigate()

  return(

    <div
      className="movie-card"
      onClick={()=>navigate(`/movie/${id}`)}
    >

      <img
        src={image}
        alt={title}
        className="poster"
      />

      <h4>{title}</h4>

    </div>

  )

}

export default MovieCard