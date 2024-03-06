export default function FeatureCard({ content }) {
    const setLayout = () => {
        if (content.standard) {
            return {
                backgroundColor: "white",
            };
        } else {
            return {
                backgroundColor: "rgb(17,24,39)",
                color: "white",
            };
        }
    };

    return (
        <div
            className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-10 rounded-2xl"
            style={setLayout()}
        >
            {content.standard && (
                <div className="flex justify-center">
                    <img
                        className="rounded-full size-60"
                        src={content.img}
                        alt={content.title}
                    />
                </div>
            )}
            <div className="text-center mx-5 grid place-content-center">
                <h2 className="font-semibold pb-5 text-xl underline underline-offset-2">
                    {content.title}
                </h2>
                <p className="text-base">{content.description}</p>
            </div>
            {!content.standard && (
                <div className="flex justify-center">
                    <img
                        className="rounded-full size-60"
                        src={content.img}
                        alt={content.title}
                    />
                </div>
            )}
        </div>
    );
}
