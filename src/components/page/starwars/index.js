import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "../../atom/button";
import Region from "../../template/region";

function StarWars(){
    let [data, setData] = useState([{}]);
    let [prev, setPrev] = useState("");
    let [next, setNext] = useState("");
    let [url, setUrl] = useState("https://swapi.dev/api/people");

    useEffect(() =>{
        axios({
            method : "GET",
            url : url,
        })
        .then((response) =>{
            console.log(response.data);
            setData(response.data.results);
            setNext(response.data.next);
            setPrev(response.data.previous);
        })
        .catch((error) => {
            console.log(error);
        });
    }, [url]);

    return (
        <div>
            <Region data={data}/>
            <Button onclick={()=> setUrl(prev)} mode="btn btn-warning" disable={prev == null ? true : false}>Previous</Button>
            <Button onclick={() => setUrl(next)} mode="btn btn-primary" disable={next == null ? true : false}>Next</Button>
        </div>
    )
}
export default StarWars;