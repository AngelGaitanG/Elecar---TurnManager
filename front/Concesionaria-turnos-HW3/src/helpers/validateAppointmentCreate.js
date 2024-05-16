
export const validate = (input) => {
    const errors = {}
    // VALIDACIONES DEL SERVICIO
    if (!input.service) {
        errors.service =  "El servicio es obligatorio";
    }
    const validServices = ["TestDrive", "Mantenimiento", "Reparaciones", "Asesoramiento", "Ventas"];
    if (!validServices.includes(input.service)) {
        errors.service = "Servicio no válido";
    }
    // VALIDACIONES DE LA FECHA
    if (!input.date) {
        errors.date = "La fecha es obligatoria";
    }
    const today = new Date().toISOString().split('T')[0];
    if (input.date < today) {
        errors.date = "La fecha no puede ser en el pasado";
    }
    //VALIDACIONES DE LA HORA
    if (!input.time) {
        errors.time = "El horario es obligatorio";
    }
    const validTimes = [];
    for (let i = 6; i <= 21; i++) {
        validTimes.push(`${i}:00`);
    }
    if (!validTimes.includes(input.time)) {
        errors.time = "Horario no válido";
    }

    return errors
};
