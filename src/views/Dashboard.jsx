import { useState, useContext, useEffect } from "react";
import { AssetsContext } from "../context/assetsContext";
import PieChart from "../components/PieChart";
import Container from "../components/Container";
import Dropdown from "../components/Dropdown";
import AlignList from "../components/AlignList";
import { filterBy } from "../utils/applyFilters";
import { countStates } from "../utils/countStates";

export default function Dashboard() {
    const filterPlant = {
        name: "Planta",
        optList: ["Papelera", "Cementera"],
    };

    const filterZone = {
        name: "Zona",
        optList: ["Fabricacion", "Conversion", "Horno", "Prensa"],
    };

    const filterType = {
        name: "Tipo",
        optList: [
            "Variador - VFD",
            "Motor - MO",
            "Válvula - VC",
            "Transmisor - TX",
            "Reductor - RD",
            "Transformador - TR",
            "PLC - CS",
            "Neumática - NM",
            "Hidráulica - HD",
            "Robot - RB",
        ],
    };

    const status = ["Operativo", "Inspeccionar", "Fuera de servicio"];

    const assetsFromContext = useContext(AssetsContext).data;
    const [assets, setAssets] = useState(assetsFromContext);
    const [isPlantSelected, setIsPlantSelected] = useState(false);
    const [zoneList, setZoneList] = useState(filterZone.optList);
    const [isZoneSelected, setIsZoneSelected] = useState(false);
    const [countAssetStates, setCountAssetStates] = useState([0, 0, 0]);
    const [activeFilters, setActiveFilters] = useState({
        planta: "all",
        zona: "all",
        tipo: "all",
    });

    useEffect(() => {
        setAssets(assetsFromContext);
    }, [assetsFromContext]);

    useEffect(() => {
        const filtered = filterBy(
            assetsFromContext,
            activeFilters.planta,
            activeFilters.zona,
            activeFilters.tipo
        );
        setAssets(filtered);
    }, [activeFilters]);

    useEffect(() => {
        // countStates(assets, status);
        if (assets) {
            setCountAssetStates(countStates(assets, status));
        }
    }, [assets]);

    const handleChangePlant = (plant) => {
        // Filtra los elementos dependiendo de la planta que se haya elegido
        if (plant === "all") {
            setAssets(assetsFromContext);
            setIsPlantSelected(false);
        } else {
            setIsPlantSelected(true);
        }

        //Separa los elementos que corresponden a cada planta
        if (plant === filterPlant.optList[0]) {
            setZoneList(filterZone.optList.slice(0, 2));
        } else if (plant === filterPlant.optList[1]) {
            setZoneList(filterZone.optList.slice(2));
        }

        //actualiza el estado de los filtros activos con la planta seleccionada
        setActiveFilters((activeFilters) => ({
            ...activeFilters,
            planta: plant,
        }));
    };

    const handleChangeZone = (zone) => {
        if (zone === "all") {
            setIsZoneSelected(false);
        } else {
            setIsZoneSelected(true);
        }

        //actualiza el estado de los filtros activos con la planta seleccionada
        setActiveFilters((activeFilters) => ({
            ...activeFilters,
            zona: zone,
        }));
    };

    const handleChangeType = (type) => {
        setActiveFilters((activeFilters) => ({
            ...activeFilters,
            tipo: type.split(" ")[0],
        }));
    };

    return (
        <div>
            <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl mb-10 font-semibold flex justify-center">
                Dashboard
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 ">
                <div className="text-left mx-10 mb-10 w-fit">
                    <h2 className="text-xl sm:text-xl lg:text-2xl font-semibold border-b-2 border-gray-900 w-fit">
                        Filtros:
                    </h2>
                    <div className="w-fit">
                        <div>
                            <Dropdown
                                filterName={filterPlant.name}
                                filterList={filterPlant.optList}
                                onSelection={handleChangePlant}
                            ></Dropdown>
                        </div>
                        {isPlantSelected ? (
                            <div className="w-fit">
                                <Dropdown
                                    filterName={filterZone.name}
                                    filterList={zoneList}
                                    onSelection={handleChangeZone}
                                ></Dropdown>
                            </div>
                        ) : null}
                        {isZoneSelected ? (
                            <div className="w-fit">
                                <Dropdown
                                    filterName={filterType.name}
                                    filterList={filterType.optList}
                                    onSelection={handleChangeType}
                                    defaultItem="Todos"
                                ></Dropdown>
                            </div>
                        ) : null}
                    </div>
                </div>
                <div className="flex justify-center w-2/5">
                    <PieChart stats={countAssetStates} />
                </div>
                <div className="flex justify-center w-2/5">
                    <PieChart stats={countAssetStates} />
                </div>
            </div>
            <Container>
                <div className="mt-10 w-3/4">
                    {assets
                        ? assets.map((asset, id) => (
                              <AlignList key={id} asset={asset}></AlignList>
                          ))
                        : null}
                </div>
            </Container>
        </div>
    );
}
