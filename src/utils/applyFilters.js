const filterBy = (assets, plant, zone = "all", type = "all") => {
    if (plant !== "all") {
        if (zone !== "all") {
            if (type !== "all") {
                return assets.filter(
                    (asset) =>
                        asset.planta === plant &&
                        asset.zona === zone &&
                        asset.tipo === type
                );
            }
            return assets.filter(
                (asset) => asset.planta === plant && asset.zona === zone
            );
        }
        return assets.filter((asset) => asset.planta === plant);
    }
};

export { filterBy };
