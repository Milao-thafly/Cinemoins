import { useState} from "react"
import { useEffect } from 'react'

const BASE_URL = "https://api.themoviedb.org/3"
export const useFetcher = <T>(endpoint: string) => {

    const [isError, setIsError] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [movies, setMovies] = useState<any[]>([]);
        

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setIsLoading(true);
                setIsError(false);

                // const res = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=aebad9df2bd324d06a86f8e8c658080a");
                const res = await fetch(`${BASE_URL}/${endpoint}?api_key=aebad9df2bd324d06a86f8e8c658080a`);

                const data = await res.json();
                setMovies(data.results ?? []);

                // setMovie(movie.results);
            } catch (err) {
                setIsError(true);
            } finally {
                setIsLoading(false)
            }
        };
        fetchMovies();
    }, [endpoint]);
    // const handleIncrement = () => {
    //     useFetcher();
    // }
    // console.log(handleIncrement);
    return { movies, isLoading, isError}
    };