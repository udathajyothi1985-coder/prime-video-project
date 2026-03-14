const API_KEY = "88e3e2a8"

export const searchMovies = (movie)=>
`https://www.omdbapi.com/?apikey=${API_KEY}&s=${movie}`

export const categories = {
  trending:"avengers",
  action:"batman",
  comedy:"comedy",
  adventure:"harry potter",
  animation:"disney"
}