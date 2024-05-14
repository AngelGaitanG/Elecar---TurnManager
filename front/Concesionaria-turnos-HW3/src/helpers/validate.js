export const validate = (input) => {

    const errors = {};
    // NAME VALIDATIOS
    if (!input.name.trim()) {
        errors.name = "El nombre es requerido";
    }
    // EMAIL
    if (!input.email.trim()) {
        errors.email = "El email es requerido";
    } else if (!/\S+@\S+\.\S+/.test(input.email)) {
        errors.email = "El email no es valido";
    }
    // BIRTHDATE
    if (!input.birthdate.trim()) {
        errors.birthdate = "La fecha de nacimiento es requerida";
    } else {
        const currentDate = new Date();
        const userBirthdate = new Date(input.birthdate);
        let age = currentDate.getFullYear() - userBirthdate.getFullYear();
        const monthDiff = currentDate.getMonth() - userBirthdate.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < userBirthdate.getDate())) {
            age--;
        }

        if (age < 6 || age >= 115) {
            errors.birthdate = "Fecha invalida";
        }
    }
    // DNI
    if (!input.nDni.trim()) {
        errors.nDni = "El DNI es requerido";
    } else if (!/^\d{8}$/.test(input.nDni)){
        errors.nDni = "El DNI debe tener 8 digitos";
    }
    // USERNAME
    if (!input.username.trim()) {
        errors.username = "El username es requerido";
    }
    // PASSWORD
    if (!input.password.trim()) {
        errors.password = "La contraseña es requerida";
    } else if (input.password.length < 6) {
        errors.password = "La contraseña debe tener al menos 6 caracteres";
    }
    // CONFIRM PASSWORD
    if (input.password !== input.confirmPassword) {
        errors.confirmPassword = "Las contraseñas no coinciden";
    }

    return errors
}

    
