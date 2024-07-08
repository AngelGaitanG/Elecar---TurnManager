/* eslint-disable */

import { useEffect } from "react"
import Turno from "../../components/Appointment/Turno";
import styles from "../Mis Turnos/MisTurnos.module.css"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux";
import { setUserAppointments } from "../../redux/reducer";
import config from "../../../configENV";



const MisTurnos = () => {
    const userId = useSelector(state => state.user.userData.user.id);
    const dispatch = useDispatch();
    const appointments = useSelector(state => state.user.userAppointments)


    useEffect(() => {
        axios.get(`${config.URL_BACKEND}/users/${userId}`).then((res) => dispatch(setUserAppointments(res.data.appointments)))
    }, [userId, dispatch])

    const handleRefresh = () => {
        axios.get(`${config.URL_BACKEND}/users/${userId}`).then((res) => dispatch(setUserAppointments(res.data.appointments)))
    }

    return (<div className={styles.misTurnos}>
        <div className={styles.turnosContainer}>
        <h1>Mis Turnos</h1>
        <div className={styles.turnos}>
        {appointments.map((turn) => {
            const fecha = turn.date.split('T')[0];
            return <Turno key={turn.id} id={turn.id} date={fecha} time={turn.time} status={turn.status} service={turn.service} onRefresh={handleRefresh}/> 
            })
            }
        </div>
        </div>
    </div>)
}

export default MisTurnos