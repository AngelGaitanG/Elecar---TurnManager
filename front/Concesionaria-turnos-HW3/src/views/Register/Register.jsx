/* eslint-disable no-undef */

import { useState } from "react";
import { validate } from "../../helpers/validateRegister";
import axios from "axios"
import style from "./Register.module.css"
import { useNavigate } from "react-router-dom";
import config from "../../../configENV";
config

 const Register = () => {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        birthdate: "",
        nDni: "",
        username: "",
        password: "",
        confirmPassword: ""
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        birthdate: "",
        nDni: "",
        username: "",
        password: "",
        confirmPassword: ""
    });

    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;

        setUserData((prevUserData) => {
            const updatedUserData = { ...prevUserData, [name]: value };
            const validationErrors = validate(updatedUserData);
            setErrors(validationErrors);
            return updatedUserData;
        });
    };
    // eslint-disable-next-line no-unused-vars
    


    const handleSubmit = (event) => {
        // eslint-disable-next-line no-unused-vars
        const { confirmPassword, nDni, ...dataToSubmit } = userData;
        dataToSubmit.nDni = Number(nDni);
        event.preventDefault();
        const formErrors = validate(userData);
        if (Object.keys(errors).length === 0) {
            axios.post(`${config.URL_BACKEND}/users/register`, dataToSubmit).then(() => {
                alert("Usuario registrado exitosamente");
                navigate("/login");
            }).catch(() => {
                alert("Error al registrar el usuario");
            })
    } else {
        setErrors(formErrors);
    }
    }

    return (
        <div className={style.container}>  
            <form onSubmit={handleSubmit} className={style.form}>
                <h1>Register</h1>
                <div className={style.inputContainer}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" value={userData.name} onChange={handleChange}/>
                    {errors.name && <p>{errors.name}</p>}
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" value={userData.email} onChange={handleChange}/>
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="birthdate">Birthdate</label>
                    <input  type="date" name="birthdate" id="birthdate" value={userData.birthdate} onChange={handleChange}/>
                    {errors.birthdate && <p>{errors.birthdate}</p>}
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="nDni">DNI</label>
                    <input type="number" name="nDni" id="nDni" value={userData.nDni} onChange={handleChange}/>
                    {errors.nDni && <p>{errors.nDni}</p>}
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" value={userData.username} onChange={handleChange}/>
                    {errors.username && <p>{errors.username}</p>}
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" value={userData.password} onChange={handleChange}/>
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" name="confirmPassword" id="confirmPassword" value={userData.confirmPassword} onChange={handleChange}/>
                    {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
                </div>
                <button type="submit" disabled={Object.keys(errors).length !== 0}>Register</button>
            </form>
        </div>
        
    )
}

export default Register