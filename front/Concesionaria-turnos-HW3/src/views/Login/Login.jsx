import { useState } from "react";
import style from "./Login.module.css"
import validateLogin from "../../helpers/validateLogin";
import axios from "axios";
import { useDispatch } from "react-redux"
import { setUserData } from "../../redux/reducer";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch()
    const [userData, setUserDaton] = useState({
        username: "",
        password: ""
    });
    const [errors, setErrors] = useState({
        username: "",
        password: ""
    });

    const navigate = useNavigate();

const handleChange = (event) => {
 const { name, value } = event.target;
 setUserDaton({ ...userData, [name]: value });
 const errors = validateLogin(userData);
 setErrors(errors);
}

const handleSubmit = (event) => {
    event.preventDefault();
    const formErrors = validateLogin(userData);
    const {username, password} = userData
    if (Object.keys(errors).length === 0) {
        try{
         axios.post('http://localhost:3000/users/login', {username, password: password}).then((response) => {
             alert("Usuario logueado exitosamente");
             dispatch(setUserData(response.data));
             navigate("/");
         })
        } catch(error) {
            alert("Error al iniciar sesion");
        }
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