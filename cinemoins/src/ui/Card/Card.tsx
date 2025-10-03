import { Button } from "../Button/Button"
import "./Card.css"


interface CardProps{
    title: string;
    overview: string;
}
interface MovieInfo {
    title: string;
    overview: string;
    posterUrl: string;
}
export const Card = (results: MovieInfo) => {
    return (
       
        <>

        
            <div className="card">
            <img src={"https://image.tmdb.org/t/p/original" + results.posterUrl} />
            <p className="title">{results.title} </p>
            {/* <p>{results.overview} </p> */}
            

            <div>
            <Button
                name = "Paye ton putain de film"
                variant="primary"
                disabled={true}

                 />
            </div>
            
        </div>
    

    
        </>
   
    )
}