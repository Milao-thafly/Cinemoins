import "./CardList.css"
import { Card } from "../Card/Card"
import { useFetcher } from "../Fetcher/useFetcher";
import type { ApiListResult, Movie}   from "../../core/types/Api"
import  { useCarousel } from "../../core/slide/useCarroussel"


export const CardList = () => {
    const popularMovies = useFetcher<ApiListResult<Movie[]>>("movie/popular")
    const legitVoteMovies = useFetcher<ApiListResult<Movie[]>>("movie/top_rated")
    const upcomingMovies = useFetcher<ApiListResult<Movie[]>>("movie/upcoming")

    // const { start, end, next, prev } = useCarousel(popularMovies.movies || [], 6);
    // const { start, end, next, prev } = useCarousel(legitVoteMovies.movies || [], 6);

       const {
    start: popularStart,
    end: popularEnd,
    next: nextPopular,
    prev: prevPopular,
  } = useCarousel(popularMovies.movies || [], 6);

  const {
    start: legitStart,
    end: legitEnd,
    next: nextLegit,
    prev: prevLegit,
  } = useCarousel(legitVoteMovies.movies || [], 6);

  const {
    start: upcomingStart,
    end: upcomingEnd,
    next: nextUpcoming,
    prev: prevUpcoming,
  } = useCarousel(upcomingMovies.movies || [], 6);
  
  

    if (popularMovies.isLoading) return <p>Charge maintenant...</p>
    if (!popularMovies.isLoading && !popularMovies.isError) {
    // console.log(popularMovies.movies.map(m => m.poster_path));  
}if (popularMovies.isError) return <p>Retourne chez toi</p>

    if (legitVoteMovies.isLoading) return <p>Charge maintenant...</p>
    if (!legitVoteMovies.isLoading && !legitVoteMovies.isError) {
    // console.log(popularMovies.movies.map(m => m.poster_path));  
}if (legitVoteMovies.isError) return <p>Retourne chez toi</p>

    if (upcomingMovies.isLoading) return <p>Charge maintenant...</p>
    if (!upcomingMovies.isLoading && !upcomingMovies.isError) {
    // console.log(popularMovies.movies.map(m => m.poster_path));  
}   if (upcomingMovies.isError) return <p>Retourne chez toi</p>

return (
<>

<h2>Popular Movies</h2>

  <div className="arrowed-carrousel">
            <div className="container-arrow">
              <button className="arrow-left" onClick={prevPopular}> {"<"} </button>

            </div>
          <ul className="caroussel">

            {popularMovies.movies.slice(popularStart, popularEnd).map((movie) => {
    // const { start, end, next, prev } = useCarousel(popularMovies.movies || [], 6);

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
              <button className="arrow-right" onClick={nextPopular}> {">"} </button>
              
            </div>
  </div>


<h2>Best Rate</h2>
  <div className="arrowed-carrousel">

            <div className="container-arrow">
              <button className="arrow-left" onClick={prevLegit}> {"<"} </button>

            </div>
        <ul className="caroussel">
          
          {legitVoteMovies.movies.slice(legitStart, legitEnd).map((movie) => {
                // const { start, end, next, prev } = useCarousel(legitVoteMovies.movies || [], 6);

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
              <button className="arrow-right" onClick={nextLegit}> {">"} </button>
              
            </div>
  </div>



<h2>Upcoming Movies</h2>
  <div className="arrowed-carrousel">
    <div className="container-arrow">
              <button className="arrow-left" onClick={prevUpcoming}> {"<"} </button>

            </div>
          <ul className="caroussel">

              
            {upcomingMovies.movies.slice(upcomingStart, upcomingEnd).map((movie) => {
                  // const { start, end, next, prev } = useCarousel(upcommingMovies.movies || [], 6);

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
              <button className="arrow-right" onClick={nextUpcoming}> {">"} </button>
              
            </div>
  </div>


  </>
)
};