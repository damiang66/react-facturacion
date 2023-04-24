export const factura ={
    id:1,
    nombre:'Componente de Pc',
    cliente:{
        id:1,
        nombre:'Damian',
        apellido:'Adamo',
        direccion:{
            pais:'Argentina',
            provincia:'Mendoza',
            calle:'pasaje san cristobal',
            numero:1923

        },
    },
    compañia: {
        nombre: 'Empresa Adamo',
        cuit: '20-29788267-9'
    },
    items:[
        {
            id:1,
            producto:'Cpu Intel i7',
            precio:500,
            cantidad:1
        },
        {
            id:2,
            producto:'Teclado Genius de puto redondito',
            precio:30,
            cantidad:5
        },
        {
            id:3,
            producto:'Mouse DirAx',
            precio:25,
            cantidad:1
        },
    ]
}