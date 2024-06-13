import React, { useState, useEffect } from "react";

const TrafficLight = () => {
    const [activeLight, setActiveLight] = useState("");
    const [isAutoToggle, setIsAutoToggle] = useState(false);

    useEffect(() => {
        const images = [
            "https://github.com/greyzeids/traffic-light/blob/main/src/img/background.jpg?raw=true",
            "https://github.com/greyzeids/traffic-light/blob/main/src/img/off.png?raw=true",
            "https://github.com/greyzeids/traffic-light/blob/main/src/img/red.png?raw=true",
            "https://github.com/greyzeids/traffic-light/blob/main/src/img/ambar.png?raw=true",
            "https://github.com/greyzeids/traffic-light/blob/main/src/img/green.png?raw=true",
        ];

        images.forEach((src) => {
            const img = new Image();
            img.src = src;
        });

        let interval;

        const toggleLightAutomatically = () => {
            const lights = ["red", "yellow", "green"];
            const randomIndex = Math.floor(Math.random() * lights.length);
            setActiveLight(lights[randomIndex]);
        };

        if (isAutoToggle) {
            interval = setInterval(toggleLightAutomatically, 500);
        } else {
            clearInterval(interval);
        }

        return () => {
            clearInterval(interval);
        };
    }, [isAutoToggle]);

    const toggleLight = () => {
        setIsAutoToggle(!isAutoToggle);
    };

    return (
        <main className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-md-4 col-sm-12">
                    <div className="traffic-light">
                        {["red", "yellow", "green"].map((color) => (
                            <div
                                key={color}
                                className={`light ${color} ${
                                    activeLight === color ? "active" : ""
                                }`}
                                onClick={() => setActiveLight(color)}
                            ></div>
                        ))}
                    </div>
                    <div className="text-center mt-3 text-warning fs-5 rounded p-3 bg-dark bg-opacity-50">
                        <p className="text-with-border">
                            Haz click en una luz para encenderla, ¡click en el
                            botón para que se vuelva locoo!
                        </p>
                        <button
                            className="btn bg-danger text-white"
                            onClick={toggleLight}
                        >
                            {isAutoToggle ? "Parar" : "¡Click aquí!"}
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default TrafficLight;
