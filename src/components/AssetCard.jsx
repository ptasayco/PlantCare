import { Link } from "react-router-dom";

export default function AssetCard({
    asset: {
        id,
        planta,
        zona,
        supervisor,
        serialNumber,
        tag,
        tipo,
        anioFabricacion,
        estado,
        img,
    },
}) {
    const showAssetStatus = () => {
        if (estado === "Operativo") {
            return {
                backgroundColor: "green",
            };
        } else if (estado === "Inspeccionar") {
            return {
                backgroundColor: "orange",
            };
        } else if (estado === "Fuera de servicio") {
            return {
                backgroundColor: "red",
            };
        }
    };

    return (
        <Link to={`/assetdetails/${id}`}>
            <div className="bg-gray-300 p-4 rounded-md  font-semibold border border-neutral-950">
                <div className="text-md">
                    <h4>Tag: {tag}</h4>
                    <h4 className="mb-2">Tipo: {tipo}</h4>
                </div>
                <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-lg relative">
                    <img
                        className="w-full h-64 object-cover"
                        src={img}
                        alt={tag}
                    />
                    <div
                        className="absolute top-0 right-0 text-white p-2 rounded-md"
                        style={showAssetStatus()}
                    >
                        {estado}
                    </div>
                </div>
                <div className="text-sm mt-2 ">
                    <h4>Planta: {planta}</h4>
                    <h4>Resp: {supervisor}</h4>
                </div>
            </div>
        </Link>
    );
}
