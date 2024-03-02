import { useState, useEffect } from "react";
import axios from "axios";

const apiData = (url, options = { method: "get", data: null }) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await axios({ url, ...options });
            setData(response.data);
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [url, options.method, options.data]);

    return { data, error, loading, fetchData };
};

export default apiData;
