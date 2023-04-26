import React, { Component, useState, useEffect, useRef, useMemo } from "react";

function HookMistake5(url) {
    // FETCH Url
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState();
    const [error, setError] = useState();

    // Mistake : ak nepouzijem return controller.abort, 
    // tak sa pri viacerych dotazoch paralelne vtadtia data z toho najpomalsieho, nie z toho posledne spusteneho
    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        fetch(url, { signal: controller.signal })
            .then(setData)
            .catch(setError)
            .finally(() => setLoading(false));
        // OK: ******
        return () => controller.abort();
        // ******
    }, [url]);

    return { loading, error, data };
}

export default HookMistake5;
