import "./CardList.css"
import { Card } from "../Card/Card"
import { useFetcher } from "../Fetcher/useFetcher";
import type { ApiListResult, Movie}   from "../../core/types/Api"
import  { useCarousel } from "../../core/slide/useCarroussel"


export const CardList = () => {
    const popularMovies = useFetcher<ApiListResult<Movie[]>>("movie/popular")
    const legitVoteMovies = useFetcher<ApiListResult<Movie[]>>("movie/top_rated")
    const upcommingMovies = useFetcher<ApiListResult<Movie[]>>("movie/upcoming")

    const { start, end, next, prev } = useCarousel(popularMovies.movies || [], 6);
    // const { start, end, next, prev } = useCarousel(legitVoteMovies.movies || [], 6);

        

    if (popularMovies.isLoading) return <p>Charge maintenant...</p>

    if (!popularMovies.isLoading && !popularMovies.isError) {
    // console.log(popularMovies.movies.map(m => m.poster_path));  
}
    if (popularMovies.isError) return <p>Retourne chez toi</p>

        if (legitVoteMovies.isLoading) return <p>Charge maintenant...</p>

    if (!legitVoteMovies.isLoading && !legitVoteMovies.isError) {
    // console.log(popularMovies.movies.map(m => m.poster_path));  
}
    if (legitVoteMovies.isError) return <p>Retourne chez toi</p>


return (
<>

<h2>Popular Movies</h2>

  <div className="arrowed-carrousel">
            <div className="container-arrow">
              <button className="arrow-left" onClick={prev}> {"<"} </button>

            </div>
          <ul className="caroussel">

            {popularMovies.movies.slice(start, end ).map((movie) => {

              return (
                <li key={movie.id}>
                  <Card
                    title={movie.title}
                    overview={movie.overview}
                    posterUrl={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  />
                </li>
                
              );
                            // console.log(movie.poster_path); 

            })}
            
          </ul>
            <div className="container-arrow">
              <button className="arrow-right" onClick={next}> {">"} </button>
              
            </div>
  </div>


<h2>Top Movies</h2>
  <div className="arrowed-carrousel">

            <div className="container-arrow">
              <button className="arrow-left" onClick={prev}> {"<"} </button>

            </div>
        <ul className="caroussel">
          
          {legitVoteMovies.movies.map((movie) => {
            
            console.log(movie.poster_path); 
            return (
              <li key={movie.id}>
                <Card
                  title={movie.title}
                  overview={movie.overview}
                  posterUrl={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                />
              </li>
            );
          })}

          
        </ul>
        <div className="container-arrow">
              <button className="arrow-right" onClick={next}> {">"} </button>
              
            </div>
  </div>



<h2>Upcoming Movies</h2>
  <div className="arrowed-carrousel">
    <div className="container-arrow">
              <button className="arrow-left" onClick={prev}> {"<"} </button>

            </div>
          <ul className="caroussel">

              
            {upcommingMovies.movies.map((movie) => {
              console.log(movie.poster_path); 
              return (
                <li key={movie.id}>
                  <Card
                    title={movie.title}
                    overview={movie.overview}
                    posterUrl={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                  />
                </li>
              );
            })}

            
          </ul>

            <div className="container-arrow">
              <button className="arrow-right" onClick={next}> {">"} </button>
              
            </div>
  </div>


  </>
)
};