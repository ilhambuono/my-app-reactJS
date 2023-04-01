import axios from "axios";
import { useEffect, useState } from "react";
import Region from "../../template/region";
import { Modal } from "../../molecule/modal";

axios.defaults.baseURL = "http://localhost:8088/api/";

// export function Get(){
//     const [getallRegion, setallRegion] = useState([{}]);
//     let [url, setUrl] = useState("http://localhost:8088/api/")

//     useEffect(() =>{
//         axios({
//             method: "GET",
//             url: url + "region",

//         })
//         .then((response) =>{
//             console.log(response.data);
//             setallRegion(response.data.data);
//         })
//         .catch((error) => {
//             console.log(error);
//         });
//     }, []);

//     return (
//         <div>
//             <Region data={getallRegion}/>
//         </div>
//     )
// }

// export function Save(){
//     let [url, setUrl] = useState("http://localhost:8088/api/region")


//    const handleSubmit = (event) =>{
//         event.preventDefault();
//         const id = event.target.id.value;
//         const name = event.target.name.value;
//         const savedata = {id, name}
//         axios
//         .post("http://localhost:8088/api/region", savedata)
//         .then((response) => {
//             console.log(response.data);
//             window.location.reload();          
//         })
//         .catch((error) => {
//             console.log(error);
//         })
//     }



//     return (
//         <Modal handleSubmit={handleSubmit} />
      
//     //     <form onSubmit={handleSubmit}>
//     //     <label>ID:</label>
//     //     <input type="text" name="id" id="id" />
//     //     <label>NAME:</label>
//     //     <input type="text" name="name" id="name"/>
//     //     <button type="submit">Submit</button>
//     // </form>
//     )
const API = {
        getAllRegion: () =>{
            return axios.get("/region");
        },
        getRegionbyId: (id) =>{
            return axios.get("/region/" + id);
        },
        saveRegion: (name) => {
            return axios.post("/region", {
                name
            });
        },
        updateRegion: (id, data) => {
            // console.log(data)
            return axios.put("/region/" + id, data);
        },
        deleteRegion: (id) => {
            return axios.delete("/region/" + id);
        }
    };

export default API;