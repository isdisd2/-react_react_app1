import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { CancellationToken } from "typescript";

function useData() {
    const [query, setQuery] = useState<string>("react hok");
    const [data, setData] = useState<any>([]);

    //loading
    const [loading, setLoading] = useState<boolean>(false);
    //error state
    const [error, setError] = useState<string>("");
    //cancel token

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        setError("");

        async function fetchData() {
            try {
                const signal = controller.signal;
                const response = await axios.get(
                    `http://hn.algolia.com/api/v1/search?query=${query}`,
                    { signal }
                );
                setData(response.data.hits);
                setLoading(false);
            } catch (error) {
                // if (error.code !== "ERR_CANCELED") {
                if (!controller.signal.aborted) {
                    console.error(error);
                } else {
                    console.log("LEN cancel req.");
                }
            }
        }

        fetchData().catch((error) => {
            const msg: string = error.message;
            setError(msg);
        });
        return () => {
            controller.abort();
        };
    }, [query]);

    return [data, query, setQuery, loading, error] as const;
}

export default useData;
