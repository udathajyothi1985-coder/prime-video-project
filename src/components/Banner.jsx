import { useNavigate } from "react-router-dom"

function Banner(){

  const navigate = useNavigate()

  return(

    <div className="banner">

      <h1>Welcome to Prime Video</h1>

      <p>Watch Latest Movies and Shows</p>

      <button
        className="watch-btn"
        onClick={()=>navigate("/home")}
      >
        Watch Now
      </button>

    </div>

  )

}

export default Banner