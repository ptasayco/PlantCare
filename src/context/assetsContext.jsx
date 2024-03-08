import { createContext } from "react";
import apiData from "../hooks/apiRequest";

const AssetsContext = createContext();

const AssetsContextProvider = (props) => {
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
        <AssetsContext.Provider value={{ data }}>
            {props.children}
        </AssetsContext.Provider>
    );
};

export { AssetsContext, AssetsContextProvider };
