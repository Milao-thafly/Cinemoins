import { useState } from 'react'
import { CardList } from "../src/ui/CardList/CardList"
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
