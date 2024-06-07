import { useState } from 'react';
import './Login.css'
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import {Navigate} from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('mary@gmail.com');
    const [password, setPassword] = useState('Password');
    const navigate = useNavigate();

    /*
    const handleClick=(event) => {
        event.preventDefault();
        console.log(email);
        console.log(password);
        navigate('/Dashboard');
    };*/

    const handleClick=(event)=>{
        event.preventDefault();
        axios.post('http://127.0.0.1:8000/api/login',{email,password})
        .then(
            (response)=>{
                console.log(response);
                localStorage.setItem('token',response.data.token);
                //Despues de iniciar sesión nos redirige al dashboard
                navigate('/inicio.html');
            }
        ).catch(
            (error)=>{
                console.log(error);
            }
        )
    }

    /*
    const handleClick2=(event) => {
        event.preventDefault();
        console.log(password);
    }*/

    return(

        <div className="principal">
            <div className='divP2'>
                <div className="divIzq">
                    <img src="https://cdn-icons-png.flaticon.com/512/6326/6326055.png" alt="" />
                </div>
                <div className="divDer">
                    <h1>Login</h1>
                    <form action="">
                        <label htmlFor="user">Usuario:</label>
                        <br />
                        <input type="text" className="user" required id='email' value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                        <label htmlFor="passw">Contraseña</label>
                        <br />
                        <input type="password" className="passw" id="passw" value={password} onChange={(p) => {setPassword(p.target.value)}}/>
                        <input type="submit" value="Iniciar sesión" className="btn" onClick={handleClick}/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login