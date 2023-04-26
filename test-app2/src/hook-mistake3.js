import React, { Component, useState, useEffect, useRef, useMemo } from "react";

function HookMistake3(params) {
    const [message1, setMessage1] = useState("X");
    const [message2, setMessage2] = useState("y");
    // Mistake : pouzitie useEffect ked nie je potrebne, lebo potom sa vykresluje 2x
    // const [fullmessage, setFullmessage] = useState(1);
    // useEffect(() => {
    //     setFullmessage(`${message1}${message2}`);
    // });

    // OK:
    const fullmessage = `${message1}${message2}`;
    return (
        <>
            <div className="flex-row">
                <div>Mistake3: </div>
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
                <span>{fullmessage}</span>
            </div>
        </>
    );
}

export default HookMistake3;
