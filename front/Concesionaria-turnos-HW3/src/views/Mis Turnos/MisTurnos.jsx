/* eslint-disable */

import { useEffect } from "react"
import Turno from "../../components/Appointment/Turno";
import styles from "../Mis Turnos/MisTurnos.module.css"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux";
import { setUserAppointments } from "../../redux/reducer";




const MisTurnos = () => {
    const dispatch = useDispatch();
    const appointments = useSelector(state => state.user.userAppointments)


    useEffect(() => {
        // Datos simulados para las citas
        const mockAppointments = [
            { id: 1, date: "2023-10-01T10:00:00Z", time: "10:00", status: "confirmed", service: "Ventas" },
            { id: 2, date: "2023-10-02T14:00:00Z", time: "14:00", status: "pending", service: "Asesoramiento" },
            // Agrega más citas simuladas según sea necesario
        ];

        // Solo actualiza si las citas simuladas son diferentes
        if (appointments.length === 0) {
            dispatch(setUserAppointments(mockAppointments));
        }
    }, [dispatch])

    const handleRefresh = () => {
        // Datos simulados para las citas
        const mockAppointments = [
            { id: 1, date: "2023-10-01T10:00:00Z", time: "10:00", status: "confirmed", service: "Oil Change" },
            { id: 2, date: "2023-10-02T14:00:00Z", time: "14:00", status: "pending", service: "Tire Rotation" },
            // Agrega más citas simuladas según sea necesario
        ];

        // Simula la acción de despacho con los datos simulados
        dispatch(setUserAppointments(mockAppointments));
    }

    return (<div className={styles.misTurnos}>
        <div className={styles.turnosContainer}>
        <h1>Mis Turnos</h1>
        <div className={styles.turnos}>
        {appointments.map((turn, index) => {
            const fecha = turn.date.split('T')[0];
            return <Turno key={`${turn.id}-${index}`} id={turn.id} date={fecha} time={turn.time} status={turn.status} service={turn.service} onRefresh={handleRefresh}/> 
        })}
        </div>
        </div>
    </div>)
}

export default MisTurnos