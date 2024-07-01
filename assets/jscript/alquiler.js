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

const propAlquiler = document.querySelector(".lista_propiedades");
let html1 = "";
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
    html1 += `
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
propAlquiler.innerHTML = html1;