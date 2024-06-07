import axios from "axios";
import { useState } from "react";

const Dashboard = () => {
//Obtener el usuario logueado
    const [user,setUser] = useState(null);
    const getUser = () => {
        axios.get('/user')
        .then(
            (response) =>{
                console.log(response);
                setUser(response.data);
            }
        )
        .catch;{
            (err) =>{
                console.log(err);
            }
        }
    }
    getUser();
    return(
        <>
            <p>Pagina para el Dashboard</p>
            <p>Hola {user?.name}</p>
            <button onClick={getUser}>Obtener</button>
        </>
        

    )
}
export default Dashboard