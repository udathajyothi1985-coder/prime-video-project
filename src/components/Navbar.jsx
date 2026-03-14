import { useNavigate, useLocation } from "react-router-dom"
import { useState } from "react"

function Navbar(){

  const navigate = useNavigate()
  const location = useLocation()
  const [search,setSearch] = useState("")

  const handleSearch = ()=>{
    if(search.trim()!==""){
      navigate(`/search/${search}`)
    }
  }

  return(

    <div className="navbar">

      <h2 className="logo" onClick={()=>navigate("/home")}>
        Prime Video
      </h2>

      <div className="menu">

        <p
          className={location.pathname==="/home"?"active":""}
          onClick={()=>navigate("/home")}
        >
          Home
        </p>

        <p
          className={location.pathname==="/movies"?"active":""}
          onClick={()=>navigate("/movies")}
        >
          Movies
        </p>

        <p
          className={location.pathname==="/tvshows"?"active":""}
          onClick={()=>navigate("/tvshows")}
        >
          TV Shows
        </p>

        <input
        className="search-input"
          placeholder="Search..."
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        />

        <button  className="search-btn" onClick={handleSearch}>
          Search
        </button>

      </div>

    </div>

  )
}

export default Navbar