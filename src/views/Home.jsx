import Container from "../components/Container";
import Features from "../components/Features";

export default function Home() {
    const estiloFondo = {
        backgroundImage:
            "url(https://posgrado.utec.edu.pe/sites/default/files/2023-10/curso-industria-4.0-utec-posgrado.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };

    return (
        <>
            <div>
                <div
                    style={estiloFondo}
                    className="h-screen flex items-center justify-center text-white font-sans"
                >
                    <div className="text-center">
                        <div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl m-10">
                                PlantCare
                            </h1>

                            <p className="text-lg sm:text-lg md:text-xl lg:text-2xl mb-10 md:font-semibold lg:font-semibold w-auto mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-6">
                                PlantCare simplifica la gestión y monitoreo de
                                activos, ofreciendo control intuitivo y acceso
                                instantáneo a información crucial. Más que una
                                herramienta, es tu socio estratégico para el
                                éxito empresarial. Únete y transforma la gestión
                                de activos, optimizando la eficiencia operativa.
                                ¡Bienvenido al futuro empresarial!
                            </p>
                        </div>
                    </div>
                </div>

                <Container>
                    <Features />
                </Container>
            </div>
        </>
    );
}
