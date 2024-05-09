
/* eslint-disable */

import { useState } from "react"
import myTurns from "../../helpers/myTurns"
import Turno from "../../components/Turno/Turno";


const MisTurnos = () => {
    const [turns, setTurns] = useState(myTurns);

    return <div>
        <h1>Mis Turnos</h1>
        {turns.map((turn) => {
            return <Turno key={turn.id} {...turn}/> 
            })
            }
    </div>
}

export default MisTurnos