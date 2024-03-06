import FeatureCard from "./FeatureCard";
import Slider from "react-slick";

export default function Features() {
    const featuresContent = [
        {
            id: "1",
            title: "Monitoreo en Tiempo Real",
            description:
                "Obtén una visión instantánea y detallada del estado actual de tus activos. PlantCare te proporciona información en tiempo real sobre parámetros clave, alertándote de cualquier anomalía y permitiéndote tomar medidas proactivas para evitar problemas.",
            img: "https://igromi.com/wp-content/uploads/2021/08/IOT-energia-1.png",
            standard: true,
        },
        {
            id: 2,
            title: "Actualizaciones Instantáneas",
            description:
                "Con PlantCare, la actualización de información es rápida y sencilla. Ya sea actualizar el historial de mantenimiento, cambiar la ubicación de un activo o registrar nuevas adquisiciones, puedes mantener tu base de datos siempre al día con unos pocos clics, ahorrando tiempo y reduciendo errores.",
            img: "https://img.freepik.com/foto-gratis/icono-actualizacion-recarga-papel-perforado_53876-14266.jpg",
            standard: false,
        },
        {
            id: 3,
            title: "Interfaz Intuitiva",
            description:
                "La interfaz de usuario de PlantCare ha sido diseñada pensando en la usabilidad. Navega por la plataforma de manera fluida y accede a la información que necesitas con facilidad. Gráficos intuitivos y paneles personalizables facilitan la interpretación de datos complejos.",
            img: "https://img.freepik.com/foto-gratis/representaciones-ui-ux-smartphone_23-2150201873.jpg",
            standard: true,
        },
        {
            id: 4,
            title: "Gestión de Mantenimiento Eficiente",
            description:
                "Optimiza tu programa de mantenimiento preventivo y correctivo. PlantCare te ayuda a programar tareas de mantenimiento de manera eficiente, programar recordatorios automáticos y asignar recursos adecuados, todo ello con el objetivo de maximizar la disponibilidad de tus activos.",
            img: "https://img.freepik.com/vector-gratis/concepto-flat-ingenieria-ordenadores_23-2148158173.jpg",
            standard: false,
        },
        {
            id: 5,
            title: "Personalización a Tu Medida",
            description:
                "PlantCare es adaptable a las necesidades específicas de tu empresa. Personaliza campos, categorías y preferencias para que la plataforma se ajuste perfectamente a tus procesos y flujos de trabajo, asegurando que obtengas la información más relevante para tu negocio.",
            img: "https://img.freepik.com/foto-gratis/primer-plano-ingenieros-mejorando-boceto_1098-1513.jpg",
            standard: true,
        },
        {
            id: 6,
            title: "Informes Detallados",
            description:
                "Genera informes personalizables sobre el rendimiento y la eficiencia de tus activos. Analiza tendencias a lo largo del tiempo, identifica áreas de mejora y toma decisiones basadas en datos con informes detallados y visualizaciones gráficas.",
            img: "https://img.freepik.com/vector-gratis/diseno-fondo-negocio_1300-161.jpg",
            standard: false,
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    return (
        // <div className="slider-container">
        //     <Slider {...settings}>
        //         {featuresContent.map((content) => (
        //             <div key={content.id}>
        //                 <section className="flex flex-wrap justify-center gap-4">
        //                     <FeatureCard content={content} key={content.id} />
        //                 </section>
        //             </div>
        //         ))}
        //     </Slider>
        // </div>

        <div className="flex flex-wrap justify-center gap-4">
            {featuresContent.map((content) => (
                <div key={content.id}>
                    <FeatureCard content={content} key={content.id} />
                </div>
            ))}
        </div>
    );
}
