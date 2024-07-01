/*  Codigo para Propiedades en Venta */
const propiedadesVenta = [
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        baños: 4,
        costo: 500000,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 4,
        baños: 1,
        costo: 120000,
        smoke: true,
        pets: true
    }, 
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 2,
        baños: 3,
        costo: 430000,
        smoke: false,
        pets: true
    }
];

const ventasProp = document.querySelector(".lista_propiedades");
let html1 = "";
for (let ventas of propiedadesVenta) {
    let textoFumar = "";
    let textoAnimales = "";
    if (ventas.smoke === true) {
        textoFumar = `<p style="color: green"><i class="fa-solid fa-smoking"></i>Permitido fumar</p>`
    } else {
        textoFumar = `<p style="color: red"><i class="fa-solid fa-ban"></i>No se permite fumar</p>`
    }
    if (ventas.pets === true) {
        textoAnimales = `<p style="color: green"><i class="fa-solid fa-dog"></i>Mascotas permitidas</p>`
    } else {
        textoAnimales = `<p style="color: red"><i class="fa-solid fa-ban"></i>No se permiten mascotas</p>`
    }
    html1 += `
        <div class="tarjeta">
            <img class="propiedad_img" src="${ventas.src}">
            <div class="propiedad_cuerpo">
                <h3 class="propiedad_titulo">${ventas.nombre}</h3>
                <p>${ventas.descripcion}</p>
                <div class="propiedad_ubicacion">
                    <p><i class="fas fa-map-marker-alt"></i> ${ventas.ubicacion}</p>
                    <p><i class="fas fa-bed"></i> ${ventas.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${ventas.baños} Baños</p>
                    <p><i class="fas fa-dollar-sign"></i> ${String(ventas.costo).replace(/(.)(?=(\d{3})+$)/g,'$1.')} USD</p>
                </div>
                <strong>${textoFumar}</strong>
                <strong>${textoAnimales}</strong>
            </div>
        </div>
    `
}
ventasProp.innerHTML = html1;


/*  Codigo para Propiedades en Alquiler */
const propiedadesAlquiler = [
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        baños: 2,
        costo: 200000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: 3,
        baños: 3,
        costo: 250000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        baños: 2,
        costo: 220000,
        smoke: false,
        pets: false
    }
];

const propAlquiler = document.querySelector(".lista_propiedades_alquiler");
let html2 = "";
for (let alquiler of propiedadesAlquiler) {
    let textoFumar = "";
    let textoAnimales = "";
    if (alquiler.smoke === true) {
        textoFumar = `<p style="color: green"><i class="fa-solid fa-smoking"></i>Permitido fumar</p>`
    } else {
        textoFumar = `<p style="color: red"><i class="fa-solid fa-ban"></i>No se permite fumar</p>`
    }
    if (alquiler.pets === true) {
        textoAnimales = `<p style="color: green"><i class="fa-solid fa-dog"></i>Mascotas permitidas</p>`
    } else {
        textoAnimales = `<p style="color: red"><i class="fa-solid fa-ban"></i>No se permiten mascotas</p>`
    }
    html2 += `
        <div class="tarjeta">
            <img class="propiedad_img" src="${alquiler.src}">
            <div class="propiedad_cuerpo">
                <h3 class="propiedad_titulo">${alquiler.nombre}</h3>
                <p>${alquiler.descripcion}</p>
                <div class="propiedad_ubicacion">
                    <p><i class="fas fa-map-marker-alt"></i> ${alquiler.ubicacion}</p>
                    <p><i class="fas fa-bed"></i> ${alquiler.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${alquiler.baños} Baños</p>
                    <p><i class="fas fa-dollar-sign"></i> ${String(alquiler.costo).replace(/(.)(?=(\d{3})+$)/g,'$1.')} USD</p>
                </div>
                <strong>${textoFumar}</strong>
                <strong>${textoAnimales}</strong>
            </div>
        </div>
    `
}
propAlquiler.innerHTML = html2;