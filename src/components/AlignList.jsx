import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { ClassNames } from "@emotion/react";

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
                    <Avatar alt={asset.name} src={asset.img} />
                </ListItemAvatar>
                <ListItemText
                    primary={`Tag: ${asset.tag} / SN: ${asset.serialNumber}`}
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: "inline" }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Tipo de activo: {asset.tipo}. Estado del activo:{" "}
                                <span>{asset.estado}</span>
                            </Typography>
                        </React.Fragment>
                    }
                />
            </ListItem>
        </List>
    );
}
