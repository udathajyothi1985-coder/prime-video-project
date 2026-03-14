import Navbar from "../components/Navbar"
import MovieRow from "../components/MovieRow"

function Movies(){

  return(

    <div>

      <Navbar />

      <h1 style={{padding:"20px"}}>Movies</h1>

      <MovieRow />

    </div>

  )

}

export default Movies