//Obtengo el elemento canva para trabajar con él
const grafica = document.getElementById("grafica");

//Cada etiqueta es una porción del pastel
const etiquetas = ["Enero", "Febrero", "Marzo", "Abril"]

//Conjunto de datos.
const datosVentas = [{
    label: "Ventas por mes 2020", //El botón del gráfico que permite verlo
    data: [5000, 1500, 8000, 5200], //Se deben tener los mismos valores que los label.
    backgroundColor: [
        'rgba(54, 162, 235, 0.2)',
        'rgba(150, 213, 47, 0.2)',
        'rgba(255, 0, 0, 0.2)',
        'rgba(110, 21, 172, 0.2)', 
    ],
    borderColor: [
        'rgba(54, 162, 235, 1)',
        'rgba(150, 213, 47, 1)',
        'rgba(255, 0, 0, 1)',
        'rgba(110, 21, 172, 1)',
    ], 
    borderWith: 1, 
}, 
/* {
    label: "Ventas por mes 2021", //El botón del gráfico que permite verlo
    data: [10000, 3000, 16000, 10400], //Se deben tener los mismos valores que los label.
    backgroundColor: [
        'rgba(54, 162, 235, 0.2)',
        'rgba(150, 213, 47, 0.2)',
        'rgba(255, 0, 0, 0.2)',
        'rgba(110, 21, 172, 0.2)', 
    ],
    borderColor: [
        'rgba(54, 162, 235, 1)',
        'rgba(150, 213, 47, 1)',
        'rgba(255, 0, 0, 1)',
        'rgba(110, 21, 172, 1)',
    ], 
    borderWith: 1, 
} */ 
];

new Chart(grafica, {
    type: 'pie', //Tipo de gráfica
    data: {
        labels: etiquetas, //Lo que aparece arriba del pastel.
        datasets: [
            datosVentas[0],
            //datosVentas[1]
            //Pueden ir más datos
        ]
    }, 
});