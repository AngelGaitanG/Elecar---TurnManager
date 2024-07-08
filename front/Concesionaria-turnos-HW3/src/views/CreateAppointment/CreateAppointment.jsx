/* eslint-disable no-undef */
import axios from "axios";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { validate } from '../../helpers/validateAppointmentCreate';
import styles from './createAppointment.module.css';
import { useNavigate } from "react-router-dom";
import { setUserAppointments } from "../../redux/reducer";
import config from "../../../configENV";

const CreateAppointment = () => {
    const dispatch = useDispatch();
    const userId = useSelector(state => state.user.userData.user.id);
    const userAppointments = useSelector(state => state.user.userAppointments);
    const [appointmentData, setAppointmentData] = useState({
        service: "",
        date: "",
        time: "",
        userId: userId 
    });

    const [errors, setErrors] = useState({
        service: "",
        date: "",
        time: "",
    });

    const navigate = useNavigate();

    const getTimes = () => {
        const times = [];
        for (let i = 6; i <= 21; i++) {
            times.push(`${i}:00`);
        }
        return times;
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setAppointmentData((prevAppointmentData) => {
            const updatedAppointmentData = { ...prevAppointmentData, [name]: value };
            const validationErrors = validate(updatedAppointmentData);
            setErrors(validationErrors);
            return updatedAppointmentData;
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (Object.keys(errors).length === 0) {
            setErrors(errors);
            try {
                const response = await axios.post(`${config.URL_BACKEND}/appointments/schedule`, appointmentData);
                alert("Turno creado exitosamente");

                // Dispatch the action to update userAppointments
                dispatch(setUserAppointments([...userAppointments, response.data]));

                navigate("/mis-turnos");
            } catch (error) {
                alert("Error al crear el turno");
            }
        }
    };

    return (
        <div className={styles.pageContainer}>
            <div className={styles.formContainer}>
                <h1>Create Appointment</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="service">Servicio</label>
                        <select
                            name="service"
                            id="service"
                            value={appointmentData.service}
                            onChange={handleChange}
                        >
                            <option value="" disabled>
                                Servicios
                            </option>
                            <option value="TestDrive">TestDrive</option>
                            <option value="Mantenimiento">Mantenimiento</option>
                            <option value="Reparaciones">Reparaciones</option>
                            <option value="Asesoramiento">Asesoramiento</option>
                            <option value="Ventas">Ventas</option>
                        </select>
                        {errors.service && <p>{errors.service}</p>}
                    </div>
                    <div>
                        <label htmlFor="date">Día</label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            value={appointmentData.date}
                            onChange={handleChange}
                        />
                        {errors.date && <p>{errors.date}</p>}
                    </div>
                    <div>
                        <label htmlFor="time">Horario</label>
                        <select
                            id="time"
                            name="time"
                            value={appointmentData.time}
                            onChange={handleChange}
                        >
                            <option value="" disabled>Seleccione un horario</option>
                            {getTimes().map((time, index) => (
                                <option key={index} value={time}>
                                    {time}
                                </option>
                            ))}
                        </select>
                        {errors.time && <p>{errors.time}</p>}
                    </div>
                    <button type="submit">Confirmar</button>
                </form>
            </div>
        </div>
    );
};

export default CreateAppointment;
