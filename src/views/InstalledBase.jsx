import { useContext } from "react";
import AssetGroup from "../components/AssetGroup";
import { AssetsContext } from "../context/assetsContext";
import Container from "../components/Container";

export default function InstalledBase() {
    const assets = useContext(AssetsContext).data;
    return (
        <Container>
            <AssetGroup assets={assets} />
        </Container>
    );
}
