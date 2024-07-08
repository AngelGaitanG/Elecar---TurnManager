const serviceImages = {
    ventasVehiculosImg: '../../assets2/ventas2.jpg',
    asesoriaPersonalizadaImg: '../../assets2/asesoria.jpg',
    mantenimientoImg: '../../assets2/mantenimiento.jpg',
    reparacionesImg: '../../assets2/reparaciones.jpg',
    testdriveImg: '../../assets2/testdrive2.jpg',
    default: '../../assets2/testdrive.jpg'
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