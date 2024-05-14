const validateLogin = (userData) => {

    const errors = {};

    if (!userData.username.trim()) {
        errors.username = "El usuario es requerido";
    }
    if(!userData.password.trim()){
        errors.password = "La contraseña es requerida";
    }

    return errors
}

export default validateLogin