import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

export default function TaskLine({ service }) {
    const showAssetStatus = () => {
        return {
            backgroundColor: "#abdbe3",
        };
    };

    return (
        <List sx={{ width: "100%" }}>
            <ListItem
                alignItems="flex-start"
                style={showAssetStatus()}
                className="rounded-lg border border-solid border-neutral-950"
            >
                <div className="ms-5 w-3/4 grid grid-cols-3 grid-rows-2 text-lg mt-1">
                    <p>
                        Fecha:{" "}
                        <span className="font-semibold">{service.fecha}</span>.
                    </p>
                    <p className="w-max">
                        Trabajo:{" "}
                        <span className="font-semibold">{service.trabajo}</span>
                        .
                    </p>
                </div>
            </ListItem>
        </List>
    );
}
