import React, { useState } from "react";

const TrafficLight = () => {
    const [activeLight, setActiveLight] = useState("");

    const toggleLight = () => {
        const lights = ["red", "yellow", "green"];
        const randomIndex = Math.floor(Math.random() * lights.length);
        setActiveLight(lights[randomIndex]);
    };

    return (
        <main className="container">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className="traffic-light">
                        <div
                            className={`light red ${
                                activeLight === "red" ? "active" : ""
                            }`}
                            onClick={() => setActiveLight("red")}
                        ></div>
                        <div
                            className={`light yellow ${
                                activeLight === "yellow" ? "active" : ""
                            }`}
                            onClick={() => setActiveLight("yellow")}
                        ></div>
                        <div
                            className={`light green ${
                                activeLight === "green" ? "active" : ""
                            }`}
                            onClick={() => setActiveLight("green")}
                        ></div>
                    </div>
                    <div className="text-center mt-3">
                        <button
                            className="btn btn-primary"
                            onClick={toggleLight}
                        >
                            Alternar
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default TrafficLight;
