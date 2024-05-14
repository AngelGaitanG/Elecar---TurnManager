import { useState } from "react";
import style from "./Login.module.css"
import validateLogin from "../../helpers/validateLogin";
import axios from "axios";

const Login = () => {

    const [userData, setUserData] = useState({
        username: "",
        password: ""
    });
    const [errors, setErrors] = useState({
        username: "",
        password: ""
    });


const handleChange = (event) => {
 const { name, value } = event.target;
 setUserData({ ...userData, [name]: value });
 const errors = validateLogin(userData);
 setErrors(errors);
}

const handleSubmit = (event) => {
    event.preventDefault();
    const formErrors = validateLogin(userData);
    if (Object.keys(errors).length === 0) {
        axios.post('http://localhost:3000/users/login', userData).then(() => {
            alert("Usuario logueado exitosamente");
        }).catch(() => {
            alert("Error al iniciar sesion");
        })
    } else {
        setErrors(formErrors);
    }
}
    
    return (

        <div className={style.container}>

            <form className={style.form} onSubmit={handleSubmit}>


                <div className={style.inputContainer}>
                    <label htmlFor="usermaname">Usuario</label>
                    <input type="text" name="username" value={userData.username} onChange={handleChange} style={{color: "white"}} placeholder="Username"/>
                    {errors.username && <p>{errors.username}</p>}
                </div>

                <div className={style.inputContainer}>
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" name="password" value={userData.password} onChange={handleChange} style={{color: "white", }} placeholder="Password" />
                    {errors.password && <p>{errors.password}</p>}
                </div>

                <button disabled={userData.username === '' || userData.password === '' || Object.keys(errors).length !== 0}>Iniciar Sesión</button>

            </form>
            
        </div>
    )

}

export default Login