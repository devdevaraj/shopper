import { useState, useEffect } from "react";
import axios from "axios";

function useFetch(url) {
    const [data, setData] = useState({
        isLoading: true,
        apiError: null,
        apiData: null
    });

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setData(prev => ({ ...prev, apiData: response.data }));
            })
            .catch(error => {
                setData(prev => ({ ...prev, apiError: error }));
            })
            .finally(() => {
                setData(prev => ({ ...prev, isLoading: false }));
            });
    }, [url]);

    return data;
}

export default useFetch;