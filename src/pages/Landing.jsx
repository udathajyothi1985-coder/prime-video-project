import { useNavigate } from "react-router-dom"

function Landing() {

  const navigate = useNavigate()

  const handleStart = () => {
    navigate("/home")
  }

  return (
    <div className="landing">

      <div className="overlay">

        <h1 className="title">Prime Video</h1>

        <p className="subtitle">
          Watch Unlimited Movies and TV Shows
        </p>

        <button
          className="start-btn"
          onClick={handleStart}
        >
          Start Watching
        </button>

      </div>

    </div>
  )
}

export default Landing