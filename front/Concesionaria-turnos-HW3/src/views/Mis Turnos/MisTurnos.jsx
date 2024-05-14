
/* eslint-disable */

import { useEffect, useState } from "react"
import Turno from "../../components/Appointment/Turno";
import styles from "../Mis Turnos/MisTurnos.module.css"
import axios from "axios"


const MisTurnos = () => {
    const [turns, setTurns] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/appointments').then((res) => setTurns(res.data)).catch((err) => alert(err))
    }, [])

    return (<div className={styles.misTurnos}>
        <div className={styles.turnosContainer}>
        <h1>Mis Turnos</h1>
        <div className={styles.turnos}>
        {turns.map((turn) => {
            return <Turno key={turn.id} {...turn}/> 
            })
            }
        </div>
        </div>
    </div>)
}

export default MisTurnos