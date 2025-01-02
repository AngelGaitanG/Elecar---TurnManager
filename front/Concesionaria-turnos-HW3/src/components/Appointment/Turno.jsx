/* eslint-disable */
import { useDispatch, useSelector } from "react-redux";
import { setUserAppointments } from "../../redux/reducer";
import { getImg } from "../../helpers/serviceImages";

const Turno = ({id, date, time, status, service, onRefresh}) => {
    const dispatch = useDispatch();
    const appointments = useSelector(state => state.user.userAppointments);


    const handleCancel = (event) => {
        event.preventDefault();
        try {
            // Simula la cancelación del turno
            const updatedAppointments = appointments.map((appointment) =>
                appointment.id === id ? { ...appointment, status: "cancelled" } : appointment
            );
            dispatch(setUserAppointments(updatedAppointments));
            alert("Turno cancelado exitosamente");
            onRefresh();
        } catch (error) {
            alert("Error al cancelar el turno", error);
            console.log(error);
        }
    };
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