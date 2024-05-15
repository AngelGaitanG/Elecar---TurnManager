import axios from "axios";
import serviceImages from "../../helpers/serviceImages";

/* eslint-disable */
const { ventasVehiculosImg, asesoriaPersonalizadaImg, mantenimientoImg, reparacionesImg, testdriveImg } = serviceImages

const Turno = ({id, date, time, status, onRefresh}) => {
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
    // switch(service) {
    //     case 'ventas de vehiculos':
    //         serviceImage = ventasVehiculosImg;
    //         break;
    //     case 'asesoramiento personalizado':
    //         serviceImage = asesoriaPersonalizadaImg;
    //         break;
    //     case 'mantenimiento':
    //         serviceImage = mantenimientoImg;
    //         break;
    //     case 'reparaciones':
    //         serviceImage = reparacionesImg;
    //         break;
    //     case 'pruebas de manejo':
    //         serviceImage = testdriveImg;
    //         break;
    //     default:
    //         serviceImage = 'ruta/a/imagen/por_defecto.jpg';
    // }

    return <div>
        <img src={testdriveImg}/>
        <h2>TestDrive</h2>
        <p>Nro. Turno: {id}</p>
        <p>Fecha: {date}</p>
        <p>Hora: {time}</p>
        <p style={{color: status === "cancelled" ? "gray" : "green", fontWeight: "500"}}>Estado: {status}</p>
        <button disabled={status === "cancelled"} onClick={handleCancel}>Cancelar Turno</button>
    </div>
}

export default Turno;