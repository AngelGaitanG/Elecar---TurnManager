/* eslint-disable */

import { useEffect } from "react"
import Turno from "../../components/Appointment/Turno";
import styles from "../Mis Turnos/MisTurnos.module.css"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux";
import { setUserAppointments } from "../../redux/reducer";


const MisTurnos = () => {
    const userId = useSelector(state => state.user.userData.user.id);
    const dispatch = useDispatch();
    const appointments = useSelector(state => state.user.userAppointments)


    useEffect(() => {
        axios.get(`http://localhost:3000/users/${userId}`).then((res) => dispatch(setUserAppointments(res.data.appointments)))
    }, [userId, dispatch])

    const handleRefresh = () => {
        axios.get(`http://localhost:3000/users/${userId}`).then((res) => dispatch(setUserAppointments(res.data.appointments)))
    }

    return (<div className={styles.misTurnos}>
        <div className={styles.turnosContainer}>
        <h1>Mis Turnos</h1>
        <div className={styles.turnos}>
        {appointments.map((turn) => {
            return <Turno key={turn.id} {...turn} onRefresh={handleRefresh}/> 
            })
            }
        </div>
        </div>
    </div>)
}

export default MisTurnos