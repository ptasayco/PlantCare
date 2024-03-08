import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default function BarChart({ lineValues }) {
    // Datos de ejemplo
    const data = {
        labels: [
            "Octubre",
            "Noviembre",
            "Diciembre",
            "Enero",
            "Febrero",
            "Marzo",
        ],
        datasets: [
            {
                label: "Operativo",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "green",
                borderColor: "green",
                pointBorderColor: "green",
                pointBackgroundColor: "#99cc99",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "green",
                pointHoverBorderColor: "#99cc99",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: lineValues[0][1],
            },
            {
                label: "Inspeccionar",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "orange",
                borderColor: "orange",
                pointBorderColor: "orange",
                pointBackgroundColor: "#ffdb99",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "orange",
                pointHoverBorderColor: "#ffdb99",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: lineValues[0][2],
            },
            {
                label: "Fuera de servicio",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "red",
                borderColor: "red",
                pointBorderColor: "red",
                pointBackgroundColor: "#ff9999",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "red",
                pointHoverBorderColor: "#ff9999",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: lineValues[0][3],
            },
        ],
    };

    // Opciones de configuración
    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
        plugins: {
            legend: {
                display: true,
            },
            responsive: true,
            maintainAspectRatio: false, // Esto permite especificar width y height
        },
    };

    return (
        <div style={{ width: "600px", height: "400px" }}>
            <Line data={data} options={options} />
        </div>
    );
}
