const countStates = (assets, status) => {
    let green = 0;
    let orange = 0;
    let red = 0;
    green = assets.filter((asset) => asset.estado === status[0]).length;
    orange = assets.filter((asset) => asset.estado === status[1]).length;
    red = assets.filter((asset) => asset.estado === status[2]).length;

    return [green, orange, red];
};

export { countStates };
