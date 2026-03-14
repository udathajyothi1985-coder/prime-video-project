import { BrowserRouter, Routes, Route } from "react-router-dom"
import Landing from "./pages/Landing.jsx"
import Home from "./pages/Home.jsx"
import MovieDetails from "./pages/MovieDetails"
import "./App.css"
import Search from "./pages/Search"
import Movies from "./pages/Movies"
import TvShows from "./pages/TvShows"

function App() {

  return (

    <BrowserRouter>

      <Routes>

<Route path="/" element={<Landing />} />

<Route path="/home" element={<Home />} />

<Route path="/movies" element={<Movies />} />

<Route path="/tvshows" element={<TvShows />} />

<Route path="/search/:query" element={<Search />} />
<Route path="/movie/:id" element={<MovieDetails />} />
</Routes>

    </BrowserRouter>

  )

}

export default App