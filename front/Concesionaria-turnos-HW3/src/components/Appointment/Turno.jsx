import axios from "axios";
import { getImg } from "../../helpers/serviceImages";
/* eslint-disable */


const Turno = ({id, date, time, status, service, onRefresh}) => {
    const handleCancel = (event) => {
        event.preventDefault();
        try {
            axios.put(`http://localhost:3000/appointments/cancel/${id}`).then((res) =>{
                alert("Turno cancelado exitosamente");
                onRefresh()})
        } catch (error) {
            alert("Error al cancelar el turno", error);
            console.log(error)
        }
    }
    const imagen = getImg(service)

    return <div>
        <img src={imagen}/>
        <h2>{service}</h2>
        <p>Nro. Turno: {id}</p>
        <p>Fecha: {date}</p>
        <p>Hora: {time}</p>
        <p style={{color: status === "cancelled" ? "gray" : "green", fontWeight: "500"}}>Estado: {status}</p>
        <button disabled={status === "cancelled"} onClick={handleCancel}>Cancelar Turno</button>
    </div>
}

export default Turno;