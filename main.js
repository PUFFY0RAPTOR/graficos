var axios = require('axios');
const { Chart } = require('chart.js');
var mongoose = require('mongoose');

var data = JSON.stringify({
    "collection": "productos",
    "database": "TiendaVirtual",
    "dataSource": "ClusterADSI2364481",
    "projection": {}
});

fetch(data)
    .then(res => res.json())
    .then(json => grafico(json))

function grafico(json){
    console.log(json)
    /* const ctx = 'grafica';
    const etiquetas = []
    const datosVentas = {
        label: etiquetas,
        data: json.precio,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWith: 1,
    };

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: etiquetas,
            datasets: [
                datosVentas,
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
 */

}
            
var config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-qlmwt/endpoint/data/v1/action/find',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': 'FBoN8VVFxhEG3AL9FZvEDV8rnfQRfnm0DH3VtoV5jwaMnvkS3T5vRfCmUWDHnTnv',
    },
    data: data
};
            
axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });