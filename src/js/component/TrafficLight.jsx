import React, { useState } from "react";

const TrafficLight = () => {
    const [activeLight, setActiveLight] = useState("");

    return (
        <main>
            <div className="p-box"></div>
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
        </main>
    );
};

export default TrafficLight;
