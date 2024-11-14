
let profesores = [
  { categoria: 2, cedula: 111, nombre: "Carla", sexo: "F" },
  { categoria: 5, cedula: 222, nombre: "Samuel", sexo: "M" },
  { categoria: 3, cedula: 777, nombre: "Alejandro", sexo: "M" },
  { categoria: 1, cedula: 444, nombre: "Maria", sexo: "F" },
  { categoria: 2, cedula: 555, nombre: "Carmen", sexo: "F" },
  { categoria: 2, cedula: 666, nombre: "Marco", sexo: "M" },
  { categoria: 4, cedula: 333, nombre: "Marisela", sexo: "F" },
];

let profesoresCategoria = (profesores, categoria) => {
    let profesoresArreglo = [ ];

    profesores.forEach((profesor) => {
        if (profesor.categoria == categoria) {
            profesoresArreglo.push(profesor);
        }
    });
    return profesoresArreglo;
}

let salida = document.getElementById("salida");
let profesoresCategoria2 = profesoresCategoria(profesores, 2);

salida.innerHTML = "Los profesores que son de la categoria 2 son: <br><br>";

profesoresCategoria2.forEach((profesores) => {
    salida.innerHTML += `${profesores.cedula} - ${profesores.nombre} - ${profesores.sexo} <br>`
})



