const serviceImages = {
    ventasVehiculosImg: 'src/assets2/ventas2.jpg',
    asesoriaPersonalizadaImg: 'src/assets2/asesoria.jpg',
    mantenimientoImg: 'src/assets2/mantenimiento.jpg',
    reparacionesImg: 'src/assets2/reparaciones.jpg',
    testdriveImg: 'src/assets2/testdrive2.jpg',
    default: 'src/assets2/testdrive.jpg'
}

export const getImg = (service) => {

    switch(service) {
        case 'Ventas':
            return serviceImages.ventasVehiculosImg;
        case 'Asesoramiento':
            return serviceImages.asesoriaPersonalizadaImg;
        case 'Mantenimiento':
            return serviceImages.mantenimientoImg;
        case 'Reparaciones':
            return serviceImages.reparacionesImg;
        case 'TestDrive':
            return serviceImages.testdriveImg;
        default:
            return serviceImages.default
}
}