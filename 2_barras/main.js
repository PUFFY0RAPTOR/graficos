//Obtengo el elemento canva para trabajar con él
const grafica = document.getElementById("grafica");

//Las etiquetas son las que van en el eje X (Horizontal)
const etiquetas = ["Enero", "Febrero", "Marzo", "Abril"]

//Conjunto de datos.
const datosVentas = [{
    label: "Ventas por mes 2020", //El botón del gráfico que permite verlo
    data: [5000, 1500, 8000, 5200], //Se deben tener los mismos valores que los label.
    backgroundColor: 'rgba(54, 162, 235, 0.2)', //Color de fondo
    borderColor: 'rgba(54, 162, 235, 1)', //Color del borde
    borderWith: 1, //Ancho del borde
}, 
{
    label: "Ventas por mes 2021", //El botón del gráfico que permite verlo
    data: [10000, 800, 16000, 10400], //Se deben tener los mismos valores que los label.
    backgroundColor: 'rgba(243, 96, 64, 0.2)', //Color de fondo
    borderColor: 'rgba(232, 74, 40, 1)', //Color del borde
    borderWith: 1, //Ancho del borde
}
];

new Chart(grafica, {
    type: 'bar', //Tipo de gráfica
    data: {
        labels: etiquetas, //Lo que aparece en el eje X y al pasar por los puntos de la gráfica.
        datasets: [
            datosVentas[0],
            datosVentas[1]
            //Pueden ir más datos
        ]
    }, 
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
        },
    }
});

//Intentar con Chartist 