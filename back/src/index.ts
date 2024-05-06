import { AppDataSource } from "./config/data-source";
import { PORT } from "./config/envs";
import server from "./server";

AppDataSource.initialize()
.then(res => {
    console.log("Conexion a la base de datos realizada con exito");
    server.listen(PORT, () => {
        console.log(`Sr.Stark su servidor ha iniciado con éxito en el puerto: ${PORT}`)
    });

})


