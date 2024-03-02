import AssetCard from "./AssetCard";

export default function AssetGroup({
    assets,
    planta = "toda base instalada",
    zona = "toda la planta",
}) {
    let filteredAssets = assets;
    let groupTitle = "Activos en general";

    if (planta !== "toda base instalada") {
        filteredAssets = assets.filter((asset) => asset.planta === planta);
        groupTitle = "Activos de " + planta;
    }

    if (zona !== "toda la planta") {
        filteredAssets = filteredAssets.filter((asset) => asset.zona === zona);
        groupTitle = "Activos de " + planta + " en " + zona;
    }

    return (
        <section className="container mx-auto p-4">
            <div className="mb-3 flex justify-between">
                <h2 className="text-lg font-semibold border-b-2 border-blue-500">
                    {groupTitle}
                </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-10 gap-y-20">
                {filteredAssets.map((asset) => (
                    <div key={asset.id}>
                        <AssetCard asset={asset}></AssetCard>
                    </div>
                ))}
            </div>
        </section>
    );
}
