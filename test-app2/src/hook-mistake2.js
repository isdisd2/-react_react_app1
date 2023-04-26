import React, { Component, useState, useEffect, useRef, useMemo } from "react";

function HookMistake2(params) {
    // Mistake : aktualizacia na zaklade predoslej hodnoty
    // const [message, setMessage] = useState(0);
    // function calculate(val) {
    //     setMessage(message + val);
    //     setMessage(message + val);
    // }
    // return (
    //     <>
    //         Mistake2:{" "}
    //         <button className="btn" onClick={() => calculate(-1)}>
    //             -2
    //         </button>
    //         <p>{message}</p>
    //         <button className="btn" onClick={() => calculate(1)}>
    //             +2
    //         </button>
    //     </>
    // );

    // OK:
    const [message, setMessage] = useState(1);
    function calculate(val) {
        setMessage((prev) => prev + val);
        setMessage((prev) => prev + val);
    }
    return (
        <>
            <div className="flex-row">
                <div>Mistake2:</div>
                <button className="btn" onClick={() => calculate(-1)}>
                    -2
                </button>
                <p>{message}</p>
                <button className="btn" onClick={() => calculate(1)}>
                    +2
                </button>
            </div>
        </>
    );
}

export default HookMistake2;
