import apiData from "../hooks/apiRequest";
import AssetGroup from "../components/AssetGroup";
import Container from "../components/Container";

export default function Home() {
    const { data, error, isLoading } = apiData(
        import.meta.env.VITE_ENDPOINT_ASSETS
    );

    if (isLoading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Error: {error}</p>;
    }
    return (
        <>
            <Container>
                <AssetGroup
                    assets={data}
                    planta="Papelera"
                    zona="Fabricacion"
                />
                <br />
                <AssetGroup assets={data} planta="Papelera" zona="Conversion" />
                <br />
                <AssetGroup assets={data} planta="Cementera" zona="Horno" />
                <br />
                <AssetGroup assets={data} planta="Cementera" zona="Prensa" />
                <br />
            </Container>
        </>
    );
}
