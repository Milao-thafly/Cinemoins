import { useState } from 'react'
import { useEffect } from 'react'
import { CardList } from "../src/ui/CardList/CardList"
import { useFetcher } from '../src/ui/Fetcher/useFetcher'
export const Homepage = () => {

    const [count, setCount] = useState(0);
    const [isError, setIsError] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, ErrorMsg] = useState<boolean>(false)




    const handleIncrement = () => {
        setCount((prev) => prev + 1);
    }




    return (
        <>

            <CardList  />

      
            <div>
                {/* <p>Count: {count}</p>
                <button onClick={handleIncrement}> Incrémenter</button> */}

                {isLoading && !isError && <p>Je suis en chargement</p>}

            </div>
        </>

    )
}


    // const [joke, setJoke] = useState<string | undefined>(undefined);
    // const fetcher = async () => {
    //     const chuck = await fetch("https://api.themoviedb.org/3/configuration")
    //     const data = await chuck.json()

    //     const joke = data.value;
    //     setJoke(joke);
    // };
    // useEffect(() => {

    //     fetcher();
    // }, []);