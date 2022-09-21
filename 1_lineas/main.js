//Obtengo el elemento canva para trabajar con él
const grafica = document.getElementById("grafica");
//const grafica = "grafica";

//Las etiquetas son las que van en el eje X (Horizontal)
const etiquetas = ["Enero", "Febrero", "Marzo", "Abril"]

//Conjunto de datos.
const datosVentas = {
    label: "Ventas por mes", //El botón del gráfico que permite verlo
    data: [5000, 1500, 8000, 5200], //Se deben tener los mismos valores que los label.
    backgroundColor: 'rgba(54, 162, 235, 0.2)', //Color de fondo
    borderColor: 'rgba(54, 162, 235, 1)', //Color del borde
    borderWith: 1, //Ancho del borde
};

new Chart(grafica, {
    type: 'line', //Tipo de gráfica
    data: {
        labels: etiquetas, //Lo que aparece en el eje X y al pasar por los puntos de la gráfica.
        datasets: [
            datosVentas,
            //Pueden ir más datos
        ]
    }, 
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true //Para que la gráfica comience desde cero
                }
            }],
        },
    }
});