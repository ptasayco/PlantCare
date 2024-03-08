import * as React from "react";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

export default function AlignList({ asset }) {
    const showAssetStatus = () => {
        if (asset.estado === "Operativo") {
            return {
                backgroundColor: "#99cc99",
            };
        } else if (asset.estado === "Inspeccionar") {
            return {
                backgroundColor: "#ffdb99",
            };
        } else if (asset.estado === "Fuera de servicio") {
            return {
                backgroundColor: "#ff9999",
            };
        }
    };

    return (
        <List sx={{ width: "100%" }}>
            <ListItem
                alignItems="flex-start"
                style={showAssetStatus()}
                className="rounded-lg border border-solid border-neutral-950"
            >
                <ListItemAvatar>
                    <Avatar
                        alt={asset.name}
                        src={asset.img}
                        style={{ width: "60px", height: "60px" }}
                    />
                </ListItemAvatar>
                <div className="ms-5 w-3/4 grid grid-cols-3 grid-rows-2 text-lg mt-1">
                    <p>
                        Tag: <span className="font-semibold">{asset.tag}</span>.
                    </p>
                    <p className="w-max">
                        Supervisor:{" "}
                        <span className="font-semibold">
                            {asset.supervisor}
                        </span>
                        .
                    </p>
                    <p></p>
                    <p>
                        Planta:{" "}
                        <span className="font-semibold">{asset.planta}</span>.
                    </p>
                    <p>
                        Zona:{" "}
                        <span className="font-semibold">{asset.zona}</span>.
                    </p>
                </div>
                <div className="grid content-center">
                    <Link to={`/assetdetails/${asset.id}`}>
                        <h2 className="text-xl font-semibold me-2 w-max mt-5">
                            <span className="underline">VER MÁS</span>
                            {" >>>"}
                        </h2>
                    </Link>
                </div>
            </ListItem>
        </List>
    );
}
