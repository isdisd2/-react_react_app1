import React, { Component, useState, useEffect, useRef, useMemo } from "react";

function HookMistake3(params) {
    const [message1, setMessage1] = useState("X");
    const [message2, setMessage2] = useState("y");
    const [darkMode, setDarkMode] = useState(false);
    // Mistake : spusta sa useEffect ked nie je potrebne, lebo fullmessage sa meni aj pri kliku na checkbox
    // const fullmessage = { message1, message2 };

    // OK:
    const fullmessage = useMemo(() => {
        return { message1, message2 };
    }, [message1, message2]);

    useEffect(() => {
        console.log(fullmessage);
    }, [fullmessage]);

    // OK:

    return (
        <>
            <div
                className="flex-row"
                style={{ background: darkMode ? "#333" : "#FFF" }}
            >
                <div>Mistake4: </div>
                <input
                    type="text"
                    value={message1}
                    onChange={(e) => setMessage1(e.target.value)}
                />
                <input
                    type="text"
                    value={message2}
                    onChange={(e) => setMessage2(e.target.value)}
                />
                DarkMode:
                <input
                    type="checkbox"
                    value={darkMode}
                    onChange={(e) => setDarkMode(e.target.checked)}
                />
            </div>
        </>
    );
}

export default HookMistake3;
