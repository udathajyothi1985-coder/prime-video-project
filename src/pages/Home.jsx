import Navbar from "../components/Navbar"
import Banner from "../components/Banner"
import MovieRow from "../components/MovieRow"
import { categories } from "../services/api"

function Home(){

  return(

    <div>

      <Navbar/>

      <Banner/>

      <MovieRow
        title="Trending"
        query={categories.trending}
      />

      <MovieRow
        title="Action Movies"
        query={categories.action}
      />

      <MovieRow
        title="Comedy"
        query={categories.comedy}
      />

      <MovieRow
        title="Adventure"
        query={categories.adventure}
      />

      <MovieRow
        title="Animation"
        query={categories.animation}
      />

    </div>

  )

}

export default Home