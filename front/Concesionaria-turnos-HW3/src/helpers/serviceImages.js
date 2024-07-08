const serviceImages = {
    ventasVehiculosImg: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/89338e24-9904-45e7-9c36-fcb94fe8c9e9/dher0so-cf964386-3951-4575-9ec7-98bb80b2c8f4.jpg/v1/fill/w_894,h_894,q_70,strp/generate_an_image_representing__vehicle_sales__ser_by_meetssie_dher0so-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzg5MzM4ZTI0LTk5MDQtNDVlNy05YzM2LWZjYjk0ZmU4YzllOVwvZGhlcjBzby1jZjk2NDM4Ni0zOTUxLTQ1NzUtOWVjNy05OGJiODBiMmM4ZjQuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.o45oO_wg0Mi2kIYi2p8z_hWGNZDQExuojMcnxzdwlMw',
    asesoriaPersonalizadaImg: 'https://nebula.wsimg.com/989b5c2a78736b7aa76fe5719b8d27a8?AccessKeyId=94A01B0599FDF12A5DF6&disposition=0&alloworigin=1',
    mantenimientoImg: 'https://hawthorneautosquare.com/wp-content/uploads/2019/01/mechanic-repairing-car-972x577.png',
    reparacionesImg: 'https://www.lavanguardia.com/files/content_image_mobile_filter/uploads/2019/09/09/5f15fc78dfd70.jpeg',
    testdriveImg: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/89338e24-9904-45e7-9c36-fcb94fe8c9e9/dher0f3-dd1813da-10b1-44fb-8c7d-afc94460a658.jpg/v1/fill/w_894,h_894,q_70,strp/generate_an_image_for__test_drive__service_by_meetssie_dher0f3-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzg5MzM4ZTI0LTk5MDQtNDVlNy05YzM2LWZjYjk0ZmU4YzllOVwvZGhlcjBmMy1kZDE4MTNkYS0xMGIxLTQ0ZmItOGM3ZC1hZmM5NDQ2MGE2NTguanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.HHuRnay6NwyHBYnp2Ul-55gnHJZ1EosTPUak9vyZZAg',
    default: 'https://www.lavanguardia.com/files/content_image_mobile_filter/uploads/2019/09/09/5f15fc78dfd70.jpeg'
};

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