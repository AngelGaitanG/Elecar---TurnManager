import serviceImages from "../../helpers/serviceImages";

/* eslint-disable */
const { ventasVehiculosImg, asesoriaPersonalizadaImg, mantenimientoImg, reparacionesImg, testdriveImg } = serviceImages

const Turno = ({id, date, time, status}) => {

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
        <p style={{color: status === "cancelled" ? "black" : "green", fontWeight: "500"}}>Estado: {status}</p>
        <button disabled={status === "cancelled"}>Cancelar Turno</button>
    </div>
}

export default Turno;