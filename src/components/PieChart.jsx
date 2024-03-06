import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

Chart.register(ArcElement, Tooltip, Legend);

export default function PieChart({ stats }) {
    const data = {
        labels: ["Operativo", "Inspeccionar", "Fuera de servicio"],
        datasets: [
            {
                label: "Cantidad de activos",
                data: stats,
                backgroundColor: ["green", "orange", "red"],
            },
        ],
    };

    const handleOnClick = (event, legendItem, legend) => {
        const index = legendItem.index;
        console.log("->", index);
    };

    const options = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                onClick: handleOnClick,
            },
        },
    };

    Chart.defaults.color = "#000";
    Chart.defaults.font.size = 20;
    Chart.defaults.plugins.legend.position = "top";
    // Chart.defaults.plugins.legend.onClick = handleOnClick;

    const setSize = () => {
        return {
            width: "600px",
            height: "400px",
        };
    };

    return (
        <div style={setSize()}>
            <Pie data={data} options={options} />
        </div>
    );
}
