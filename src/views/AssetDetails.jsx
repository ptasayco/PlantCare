import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiData from "../hooks/apiRequest";
import Container from "../components/Container";
import Dropdown from "../components/Dropdown";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TaskLine from "../components/TaskLine";

export default function AssetDetails() {
    const { id } = useParams();
    const { data, error, isLoading } = apiData(
        `${import.meta.env.VITE_ENDPOINT_ASSETS}/${id}`
    );
    const [dataRx, setDataRx] = useState(data);

    useEffect(() => {
        setDataRx(data);
        console.log("act", dataRx);
    }, [data, dataRx]);

    const changeFormat = (d) => {
        if (d) {
            const td = d.split("/");
            return `${td[1]}/${td[0]}/${td[2]}`;
        }
    };

    const [selectedDate, setSelectedDate] = useState(
        changeFormat(new Date().toLocaleDateString())
    );
    const [task, setTask] = useState("");
    const [dataTx, setDataTx] = useState({
        method: "PUT",
        data: {
            servicio: [],
        },
    });

    const { dataReceived } = apiData(
        `${import.meta.env.VITE_ENDPOINT_ASSETS}/${id}`,
        dataTx
    );

    const dataDetails = [
        { label: "Planta: ", value: dataRx.planta },
        { label: "Zona: ", value: dataRx.zona },
        { label: "Supervisor: ", value: dataRx.supervisor },
        { label: "Año fabricación: ", value: dataRx.anioFabricacion },
    ];

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const status = ["Operativo", "Inspeccionar", "Fuera de servicio"];

    const onPostData = () => {
        console.log(dataRx);
        if (!dataRx.servicio.fecha) {
            console.log("no existe");
            const newData = { ...dataRx };
            newData.servicio.push({
                fecha: selectedDate,
                trabajo: task,
            });

            setDataRx(newData);
        } else {
            console.log("si existe");
            const newData = {
                servicio: {
                    fecha: selectedDate,
                    trabajo: task,
                },
            };
            setDataRx(newData);
        }

        // console.log(dataRx);
        console.log(dataTx);
        const newData = { ...dataTx };
        newData.data = { ...dataRx };
        setDataTx(newData);
        console.log("Tx", dataTx);

        setSelectedDate(changeFormat(new Date().toLocaleDateString()));
        setTask("");
    };

    return (
        <Container>
            <div>
                <div className="w-75 mx-auto py-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                    <div className="flex items-center justify-center">
                        <img
                            src={dataRx.img}
                            alt={`${dataRx.tipo} ${dataRx.tag}`}
                            width="400px"
                            height="400px"
                        />
                    </div>
                    <div className="">
                        <h2 className="text-4xl font-semibold text-center">
                            {dataRx.tipo} {dataRx.tag}
                            <br />
                            <span className="text-lg font-normal">
                                SN: {dataRx.serialNumber}
                            </span>
                        </h2>
                        <div className="grid grid-cols-2 my-5 gap-5">
                            {dataDetails.map((detail, i) => (
                                <p key={i} className="text-base w-fit">
                                    {detail.label}
                                    <span className="ms-2 font-semibold text-black">
                                        {detail.value}
                                    </span>
                                </p>
                            ))}
                            <Dropdown
                                filterName="Estado"
                                filterList={status}
                                onSelection={(newStatus) =>
                                    (dataRx.estado = newStatus)
                                }
                                defaultItem={dataRx.estado}
                            ></Dropdown>

                            <div className=" flex items-center">
                                <p className="text-base w-fit">Fecha: </p>
                                <DatePicker
                                    selected={changeFormat(selectedDate)}
                                    onChange={(newDate) => {
                                        setSelectedDate(
                                            changeFormat(
                                                newDate.toLocaleDateString()
                                            )
                                        );
                                    }}
                                    dateFormat="dd/MM/yyyy" // Puedes ajustar el formato de la fecha según tus preferencias
                                    placeholderText="Selecciona una fecha"
                                    className="border border-neutral-950 rounded-md p-1 ms-2 w-3/5"
                                />
                            </div>
                        </div>
                        <div className="my-5 gap-5 flex align-top">
                            <label
                                className="align-text-top"
                                htmlFor={dataRx.id}
                            >
                                Comentarios:
                            </label>
                            <textarea
                                id={dataRx.id}
                                style={{ height: "72px" }}
                                className="w-3/5 p-1 ms-2 border border-neutral-950 rounded-md"
                                placeholder="Breve descripcion del trabajo realizado"
                                value={task}
                                onChange={(e) => setTask(e.target.value)}
                            ></textarea>
                        </div>
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
                            onClick={() => {
                                onPostData();
                            }}
                        >
                            Guardar
                        </button>
                    </div>
                </div>
                <div>
                    {dataRx?.servicio?.length > 0
                        ? dataRx.servicio.map((task, i) => (
                              <TaskLine key={i} service={task} />
                          ))
                        : null}
                </div>
            </div>
        </Container>
    );
}
