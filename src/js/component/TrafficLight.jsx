import React, { useState, useEffect } from "react";

const TrafficLight = () => {
    const [activeLight, setActiveLight] = useState("");
    const [isAutoToggle, setIsAutoToggle] = useState(false);

    useEffect(() => {
        let intervalId;

        const toggleLightAutomatically = () => {
            const lights = ["red", "yellow", "green"];
            const randomIndex = Math.floor(Math.random() * lights.length);
            setActiveLight(lights[randomIndex]);
        };

        if (isAutoToggle) {
            intervalId = setInterval(toggleLightAutomatically, 500);
        } else {
            clearInterval(intervalId);
        }

        return () => {
            clearInterval(intervalId);
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
                            Haz click en una luz para encenderla, además puedes
                            presionar
                            <br /> el botón para cambiar de color aleatoriamente
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
