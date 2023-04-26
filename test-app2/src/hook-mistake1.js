import React, { Component, useState, useEffect, useRef, useMemo } from "react";

function HookMistake1(params) {
    // Mistake: davanie do useSTate to co nema byt v useState
    // const [email, setEmail] = useState("");
    // const [pass, setPass] = useState("");
    // function onSubmit() {
    //     e.preventDefault();
    //     console.log({ email, pass });
    // }
    // return (
    //     <>
    //         <form onSubmit={onSubmit}>
    //             <input
    //                 value={email}
    //                 onChange={(e) => e.target.value}
    //                 type="text"
    //             />
    //             <input
    //                 value={pass}
    //                 onChange={(e) => e.target.value}
    //                 type="password"
    //             />
    //    <button type="submit">Submit</button>;
    //         </form>
    //     </>
    // );

    // OK:
    const emailRef = useRef();
    const passRef = useRef();
    const [sendParams, setSendParams] = useState("");
    function onSubmit(e) {
        e.preventDefault();
        setSendParams(emailRef.current.value + "/" + passRef.current.value);
        console.log({
            email: emailRef.current.value,
            pass: passRef.current.value,
        });
    }
    return (
        <div className="flex-row">
            <div>Mistake1:</div>
            <form onSubmit={onSubmit}>
                <input ref={emailRef} type="text" />
                <input ref={passRef} type="password" />
                <button type="submit">Submit</button>
            </form>
            <p>{sendParams}</p>
        </div>
    );
}

export default HookMistake1;
