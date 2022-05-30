import { useEffect, useState } from "react";
import axios from "axios";

const Pokes = () => {
    
    const [apiData, setApiData] = useState([])
    useEffect(() => {
        axios
        .get("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then((response) =>{
            console.log(response.data.results);
            setApiData(response.data.results);
        })
        .catch((err) => {
            console.log(err.response.data.results);
        });
        
    }, []);
    return (
        <div> <h1>Pokemon</h1>
            {apiData.map((element, index) => {
            return (    <div key={index}><p>{element.name}</p></div>)
            })}
            
        </div>
    )
}

export default Pokes;