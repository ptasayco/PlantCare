import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./views/Home";
import Dashboard from "./views/Dashboard";
import InstalledBase from "./views/InstalledBase";
import AssetDetails from "./views/AssetDetails";
import Footer from "./components/Footer";
import { AssetsContextProvider } from "./context/assetsContext";

export default function App() {
    return (
        <div style={{ background: "#eaebef" }}>
            <Router>
                <NavigationBar />
                <AssetsContextProvider>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route
                            path="/installedbase"
                            element={<InstalledBase />}
                        />
                        <Route
                            path="/assetdetails/:id"
                            element={<AssetDetails />}
                        />
                    </Routes>
                </AssetsContextProvider>
                <Footer />
            </Router>
        </div>
    );
}
