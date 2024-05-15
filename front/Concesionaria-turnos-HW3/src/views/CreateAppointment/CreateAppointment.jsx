import { useState } from "react";
import { useSelector } from "react-redux";

const CreateAppointment = () => {
    const userId = useSelector(state => state.user.userData.user.id);
    console.log(userId)
    const [appointmentData, setAppointmentData] = useState({
        service: "",
        date: "",
        time: "",
        userId: userId 
    });

    const getTimes = () => {
        const times = [];
        for (let i = 6; i <= 21; i++) {
            times.push(`${i}:00`);
        }
        return times;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAppointmentData({
            ...appointmentData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar el envío del formulario, por ejemplo, enviándolo a una API
        console.log(appointmentData);
    };

    return (
        <div>
            <h1>Create Appointment</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="service">Servicio</label>
                    <select
                        name="service"
                        id="service"
                        value={appointmentData.service}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>
                            Servicios
                        </option>
                        <option value="TestDrive">TestDrive</option>
                        <option value="Mantenimiento">Mantenimiento</option>
                        <option value="Reparaciones">Reparaciones</option>
                        <option value="Asesoramiento">Asesoramiento</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="date">Día</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={appointmentData.date}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="time">Horario</label>
                    <select
                        id="time"
                        name="time"
                        value={appointmentData.time}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Seleccione un horario</option>
                        {getTimes().map((time, index) => (
                            <option key={index} value={time}>
                                {time}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit">Confirmar</button>
            </form>
        </div>
    );
};

export default CreateAppointment;
